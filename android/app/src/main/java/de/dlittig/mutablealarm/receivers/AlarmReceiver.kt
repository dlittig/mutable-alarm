package de.dlittig.mutablealarm.receivers

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.Intent.FLAG_ACTIVITY_NEW_TASK
import android.util.Log
import android.widget.Toast
import de.dlittig.mutablealarm.AlarmActivity

class AlarmReceiver: BroadcastReceiver() {
  companion object {
    const val INTENT = "RECEIVER.ALARM.INTENT"
    const val CONTENT_EXTRA = "RECEIVER.ALARM.CONTENT_EXTRA"
    const val TAG = "AM.ALARM_RECEIVER"
  }

  override fun onReceive(context: Context?, intent: Intent?) {
    Log.i(TAG, "Received intent")
    if(intent?.action === INTENT) {
      Log.i(TAG, "We are in")
      val message = intent.getStringExtra(CONTENT_EXTRA)
      //Toast.makeText(context, message, Toast.LENGTH_SHORT).show()

      val alarmIntent = Intent(context, AlarmActivity::class.java).apply {
        putExtra(CONTENT_EXTRA, message)
        flags = FLAG_ACTIVITY_NEW_TASK
      }

      context?.startActivity(alarmIntent, )
    }
  }
}
