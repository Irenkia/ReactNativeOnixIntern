package com.reactnativeonixintern;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import com.facebook.react.ReactActivityDelegate; 
//import com.zoontek.rnbootsplash.RNBootSplash;

import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactNativeOnixIntern";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // inside public class MainActivity extends ReactActivity
@Override
 public void onConfigurationChanged(Configuration newConfig) {
 super.onConfigurationChanged(newConfig);
 Intent intent = new Intent("onConfigurationChanged");
 intent.putExtra("newConfig", newConfig);
 sendBroadcast(intent);
 }
  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegate(this, getMainComponentName()) {
  //     @Override
  //     protected void loadApp(String appKey) {
  //       RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
  //       super.loadApp(appKey);
  //     }
      
  //   };
}

// @Override
//   protected void onCreate(Bundle savedInstanceState) {
//     super.onCreate(savedInstanceState);
//     RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
//   }

//  @Override
//   protected void onCreate(Bundle savedInstanceState) {
//       super.onCreate(savedInstanceState);      
//       RNBootSplash.init(MainActivity.this);
      
//   }
