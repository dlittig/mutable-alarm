package de.dlittig.mutablealarm.ringtone

import com.facebook.react.bridge.*

class RingtoneModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = "RingtoneModule"

  @ReactMethod
  fun selectRingtone(p: Promise) {
    p.resolve(true)
  }
}
