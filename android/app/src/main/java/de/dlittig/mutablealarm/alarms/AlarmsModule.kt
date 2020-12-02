package de.dlittig.mutablealarm.alarms

import com.facebook.react.bridge.*

class AlarmsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = "AlarmsModule"

  @ReactMethod
  fun setAlarm(p: Promise) {
    p.resolve(true)
  }
}
