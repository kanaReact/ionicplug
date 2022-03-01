import Capacitor
import Foundation
import SaltoJustINMobileSDK;
@objc(IonicNativePluginExample)
public class IonicNativePluginExample: CAPPlugin {

    @objc func NativeMethod(_ call: CAPPluginCall) {
        call.resolve(["message": "Hello iOS user!"])
    }

    @objc func NotifyListeners(_ call: CAPPluginCall) {
        self.notifyListeners(
            "EVENT_LISTENER_NAME",
            data: ["message": "Welcome IOS Users!"]
        )
    }
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        print("yes we call here the SDK Code")
        print("jjj",value)
      
        var key : SSMobileKey?
        do {
            key = try SSMobileKey(hexData:value)
        } catch let err as NSError {
            print("Error Coming Here in the SDK Key ",err)
            let alert = UIAlertController(title: "Error Coming Here in the SDK Key ",
                                          message: "Error Coming Here in the SDK Key ",
                                          preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: NSLocalizedString("OK",
                                                                   comment: "Default action"),
                                          style: .default,
                                          handler: nil))
            call.resolve(["message": "Error Coming Here in the SDK Key "])
            return
        }
        
        SSJustinBle.sharedInstance().startOpening(with: key!, peripheralFound: {
        }, success: { (result) in
            print("Result of the salto is : ", result)
            var resultMessage: String?
            if result?.getOpResult() == Int(AUTH_SUCCESS_UNKNOWN_RESULT) {
                resultMessage = nil;
            } else if result?.getOpResult() == Int(AUTH_SUCCESS_ACCESS_GRANTED) {
                resultMessage = "\nAccess granted";
            } else if result?.getOpResult() == Int(AUTH_SUCCESS_ACCESS_REJECTED) {
                resultMessage = "\nAccess rejected";
            }
            if (resultMessage != nil) {
                call.resolve(["message": resultMessage])
                let alert = UIAlertController(title: "Result",
                                              message: resultMessage,
                                              preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: NSLocalizedString("OK",
                                                                       comment: "Default action"),
                                              style: .default,
                                              handler: nil))

            }
        }) { (error) in
            print("Result of the salto is error : ", error.localizedDescription)
            call.resolve(["message": error.localizedDescription])

            let alert = UIAlertController(title: "Error",
                                          message: error.localizedDescription,
                                          preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: NSLocalizedString("OK",
                                                                   comment: "Default action"),
                                          style: .default,
                                          handler: nil))

        }
    }
}
