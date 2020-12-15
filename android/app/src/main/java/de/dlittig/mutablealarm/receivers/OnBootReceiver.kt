package de.dlittig.mutablealarm.receivers

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

class OnBootReceiver : BroadcastReceiver() {
  companion object {
    private const val TAG = "MA.OnBootReceiver"
  }

  override fun onReceive(context: Context?, intent: Intent?) {
    Log.i(TAG, "Received on boot intent")
  }
}
