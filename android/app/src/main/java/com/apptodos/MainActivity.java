package com.apptodos;

import static com.blitzapp.animatedsplash.animation.Constants.FADE;
import static com.blitzapp.animatedsplash.animation.Constants.ROTATE;
import static com.blitzapp.animatedsplash.animation.Constants.SCALE;
import static com.blitzapp.animatedsplash.animation.Constants.SPLASH_SLIDE_RIGHT;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;

import android.os.Bundle;
import android.util.Log;
import com.blitzapp.animatedsplash.animation.AnimatedObject;
import com.blitzapp.animatedsplash.animation.GroupAnimation;
import com.blitzapp.animatedsplash.animation.ObjectAnimation;
import com.blitzapp.animatedsplash.animation.SingleAnimation;
import com.blitzapp.animatedsplash.animation.Splash;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AppTodos";
    }

    /**
     * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
     * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
     * (Paper).
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new MainActivityDelegate(this, getMainComponentName());
    }

    public static class MainActivityDelegate extends ReactActivityDelegate {

        public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
            super(activity, mainComponentName);
        }

        @Override
        protected ReactRootView createRootView() {
            ReactRootView reactRootView = new ReactRootView(getContext());
            // If you opted-in for the New Architecture, we enable the Fabric Renderer.
            reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
            return reactRootView;
        }

        public void onCreate(Bundle saved) {
            super.onCreate(saved);
            try {
                initiateSplash();
            } catch (Exception e) {
                Log.e("ANIMATED_SPLASH", e.getMessage());
            }
        }

        public void initiateSplash() throws Exception {
            Splash splash = new Splash(getContext());
            splash.setBackgroundColor("#E5E5E5");
            splash.setSplashHideAnimation(SPLASH_SLIDE_RIGHT);
            splash.setSplashHideDelay(0);

            AnimatedObject logoimage = new AnimatedObject(
                R.drawable.logo,
                screenHeight * 0.6,
                screenWidth * 0.7,
                screenWidth / 2 - (screenWidth * 0.7) / 2,
                screenHeight / 2 - (screenHeight * 0.6) / 2 - screenHeight * 0.1,
                0,
                true
            );

            splash.addAnimatedImage(logoimage);

            AnimatedObject image1 = new AnimatedObject(
                R.drawable.seg,
                screenHeight * 0.1,
                screenWidth * 0.1,
                screenWidth / 2 - (screenWidth * 0.1) / 2,
                screenHeight / 2 - (screenHeight * 0.1) / 2,
                0,
                true
            );
            splash.addAnimatedImage(image1);
            ObjectAnimation image1Animation = new ObjectAnimation(image1, ROTATE, 600 * 7, 0, 360 * 7);
            SingleAnimation single1 = new SingleAnimation(image1Animation, 0);

            splash.ShowSplash();
        }

        @Override
        protected boolean isConcurrentRootEnabled() {
            // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
            // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
            return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }
    }
}
