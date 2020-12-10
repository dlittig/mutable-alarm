package de.dlittig.mutablealarm

import androidx.appcompat.app.AppCompatActivity
import android.annotation.SuppressLint
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.util.Log
import android.view.MotionEvent
import android.view.View
import android.view.WindowManager
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.ReadableMap
import de.dlittig.mutablealarm.modules.alarms.AlarmsModule
import de.dlittig.mutablealarm.receivers.AlarmReceiver
import java.io.Serializable
import java.time.Instant
import java.time.ZoneId

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 */
class AlarmActivity : AppCompatActivity() {
  private lateinit var alarmTime: TextView
  private lateinit var alarmLabel: TextView
  private val TAG = "AM.AlarmActivity"
  /*
  private lateinit var fullscreenContentControls: LinearLayout

  private val hideHandler = Handler()

  @SuppressLint("InlinedApi")
  private val hidePart2Runnable = Runnable {
    // Delayed removal of status and navigation bar

    // Note that some of these constants are new as of API 16 (Jelly Bean)
    // and API 19 (KitKat). It is safe to use them, as they are inlined
    // at compile-time and do nothing on earlier devices.
    fullscreenContent.systemUiVisibility =
      View.SYSTEM_UI_FLAG_LOW_PROFILE or
        View.SYSTEM_UI_FLAG_FULLSCREEN or
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE or
        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
        View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
  }
  private val showPart2Runnable = Runnable {
    // Delayed display of UI elements
    supportActionBar?.show()
    fullscreenContentControls.visibility = View.VISIBLE
  }
  private var isFullscreen: Boolean = false

  private val hideRunnable = Runnable { hide() }
  */

  private lateinit var currentAlarm: HashMap<String, Any>

  /**
   * Touch listener to use for in-layout UI controls to delay hiding the
   * system UI. This is to prevent the jarring behavior of controls going away
   * while interacting with activity UI.
   */
  /*
  private val delayHideTouchListener = View.OnTouchListener { view, motionEvent ->
    when (motionEvent.action) {
      MotionEvent.ACTION_DOWN -> if (AUTO_HIDE) {
        delayedHide(AUTO_HIDE_DELAY_MILLIS)
      }
      MotionEvent.ACTION_UP -> view.performClick()
      else -> {
      }
    }
    false
  }
  */

  private val dismissTouchListener = View.OnTouchListener { view, event ->
    when (event.action) {
      MotionEvent.ACTION_DOWN -> if (AUTO_HIDE) {
        this.dismiss()
      }
      MotionEvent.ACTION_UP -> view.performClick()
      else -> {
      }
    }
    false
  }

  @RequiresApi(Build.VERSION_CODES.M)
  private val snoozeTouchListener = View.OnTouchListener { view, event ->
    when (event.action) {
      MotionEvent.ACTION_DOWN -> if (AUTO_HIDE) {
        this.snooze()
      }
      MotionEvent.ACTION_UP -> view.performClick()
      else -> {
      }
    }
    false
  }

  private fun dismiss() {
    Log.i(TAG, "Dismissed")
    this.finish()
  }

  @RequiresApi(Build.VERSION_CODES.M)
  private fun snooze() {
    Log.i(TAG, "Snoozed")
    AlarmsModule.setAlarmInAndroid(this.applicationContext, this.currentAlarm, 2)

    this.finish()
  }

  @SuppressLint("ClickableViewAccessibility")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    this.currentAlarm = intent.getSerializableExtra(AlarmReceiver.CONTENT_EXTRA) as HashMap<String, Any>

    setContentView(R.layout.activity_alarm)
    supportActionBar?.setDisplayHomeAsUpEnabled(true)

    //isFullscreen = true

    // Set up the user interaction to manually show or hide the system UI.
    alarmTime = findViewById(R.id.alarm_time)
    alarmLabel = findViewById(R.id.alarm_name)
    //fullscreenContent.setOnClickListener { toggle() }

    //fullscreenContentControls = findViewById(R.id.fullscreen_content_controls)

    // Upon interacting with UI controls, delay any scheduled hide()
    // operations to prevent the jarring behavior of controls going away
    // while interacting with the UI.
    var resultText = "";
    for (entry in this.currentAlarm.entries) {
      resultText += "${entry.key}: ${entry.value} \n"
    }

    // Convert time to smth readable
    val time = Instant.ofEpochMilli((this.currentAlarm["time"] as Double).toLong()).atZone(ZoneId.systemDefault())
    alarmTime.text = "${padd(time.hour)}:${padd(time.minute)}"
    alarmLabel.text = this.currentAlarm["name"] as String

    findViewById<Button>(R.id.snooze_button).setOnTouchListener(this.snoozeTouchListener)
    findViewById<Button>(R.id.dismiss_button).setOnTouchListener(this.dismissTouchListener)
  }

  override fun onBackPressed() {
    super.onBackPressed()
    snooze()
  }

  private fun padd(number: Int): String = if (number < 10) "0${number}" else number.toString()

  companion object {
    /**
     * Whether or not the system UI should be auto-hidden after
     * [AUTO_HIDE_DELAY_MILLIS] milliseconds.
     */
    private const val AUTO_HIDE = true

    /**
     * If [AUTO_HIDE] is set, the number of milliseconds to wait after
     * user interaction before hiding the system UI.
     */
    private const val AUTO_HIDE_DELAY_MILLIS = 3000
  }
}
