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
  override fun getName(): String = "AlarmsModule"
  private val context = reactContext

  @RequiresApi(Build.VERSION_CODES.M)
  @ReactMethod
  fun setAlarm(alarm: ReadableMap, p: Promise) {
    // Alarm time
    val ALARM_DELAY_IN_SECOND = 10
    setAlarmInAndroid(context, alarm.toHashMap(), ALARM_DELAY_IN_SECOND)

    p.resolve(true)
  }

  companion object {
    val TAG = "MA.AlarmsModule"

    @RequiresApi(Build.VERSION_CODES.M)
    fun setAlarmInAndroid(ctx: Context, alarm: HashMap<String, Any>, delay: Int) {
      val alarmManager = ctx.getSystemService(Context.ALARM_SERVICE) as AlarmManager

      Log.i(TAG, "ABC")

      // Create intent to receive alarms
      val intent = Intent(ctx, AlarmReceiver::class.java).apply {
        action = AlarmReceiver.INTENT
        putExtra(AlarmReceiver.CONTENT_EXTRA, alarm)
      }

      // Create pending intent from intent
      val pendingIntent = PendingIntent.getBroadcast(ctx, 0, intent, 0)

      // Alarm time
      val alarmTimeAtUTC = System.currentTimeMillis() + delay * 1_000L

      // Set with system Alarm Service
      alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, alarmTimeAtUTC, pendingIntent)
    }
  }
}
