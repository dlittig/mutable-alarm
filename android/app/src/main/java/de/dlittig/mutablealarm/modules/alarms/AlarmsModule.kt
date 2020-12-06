package de.dlittig.mutablealarm.modules.alarms

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.*
import de.dlittig.mutablealarm.receivers.AlarmReceiver

class AlarmsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  private val TAG = "MA.AlarmsModule"
  override fun getName(): String = "AlarmsModule"
  private val context = reactContext

  @RequiresApi(Build.VERSION_CODES.M)
  @ReactMethod
  fun setAlarm(p: Promise) {
    // Get AlarmManager instance
    val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager

    Log.i(TAG, "ABC")

    // Create intent to receive alarms
    val intent = Intent(this.context, AlarmReceiver::class.java)
    intent.action = AlarmReceiver.INTENT
    intent.putExtra(AlarmReceiver.CONTENT_EXTRA, "Medium AlarmManager Demo")

    val pendingIntent = PendingIntent.getBroadcast(context, 0, intent, 0)

    // Alarm time
    val ALARM_DELAY_IN_SECOND = 10
    val alarmTimeAtUTC = System.currentTimeMillis() + ALARM_DELAY_IN_SECOND * 1_000L

    // Set with system Alarm Service
    alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, alarmTimeAtUTC, pendingIntent)

    p.resolve(true)
  }
}
