package de.dlittig.mutablealarm

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import com.oblador.vectoricons.VectorIconsPackage
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage
import com.swmansion.reanimated.ReanimatedPackage
import com.swmansion.rnscreens.RNScreensPackage
import com.th3rdwave.safeareacontext.SafeAreaContextPackage
import de.dlittig.mutablealarm.alarms.AlarmsPackage
import de.dlittig.mutablealarm.generated.BasePackageList
import de.dlittig.mutablealarm.ringtone.RingtonePackage
import io.expo.appearance.RNCAppearancePackage
import org.unimodules.adapters.react.ModuleRegistryAdapter
import org.unimodules.adapters.react.ReactModuleRegistryProvider

class MainApplication : Application(), ReactApplication {
  private val mModuleRegistryProvider = ReactModuleRegistryProvider(
    BasePackageList().packageList,
    listOf()
  )
  private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
    override fun getUseDeveloperSupport(): Boolean {
      return BuildConfig.DEBUG
    }

    override fun getPackages(): List<ReactPackage> {
      return listOf(
        MainReactPackage(),
        RNCAppearancePackage(),
        VectorIconsPackage(),
        ReanimatedPackage(),
        RNGestureHandlerPackage(),
        RNScreensPackage(),
        SafeAreaContextPackage(),
        AlarmsPackage(),
        RingtonePackage(),
        ModuleRegistryAdapter(mModuleRegistryProvider)
      )
    }

    override fun getJSMainModuleName(): String {
      return "index"
    }
  }

  override fun getReactNativeHost(): ReactNativeHost {
    return mReactNativeHost
  }

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this,  /* native exopackage */false)
  }
}
