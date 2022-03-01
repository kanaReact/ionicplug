//
//  IonicNativePluginExample.m
//  App
//
//  Created by Admin on 08/02/22.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(IonicNativePluginExample, "IonicNativePluginExample",
           CAP_PLUGIN_METHOD(NativeMethod, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(NotifyListeners, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           
)

