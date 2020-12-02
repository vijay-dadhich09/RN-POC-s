package com.rnnativebridgepoc.bulbView;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.rnnativebridgepoc.MainActivity;

public class BulbView extends Button {
    public static final String TAG = MainActivity.class.getSimpleName();
    public Boolean isOn = false;
    public void setIsOn (Boolean initialBulbStatus){
        isOn = initialBulbStatus;
        updateButton();
    }
    public BulbView(Context context) {
        super(context);
        this.setTextColor(Color.BLUE);
        this.setOnClickListener(changeStatusListener);
        updateButton();
    }


    public BulbView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public BulbView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }

    private OnClickListener changeStatusListener = new OnClickListener() {
        public void onClick(View v) {
            isOn = !isOn;
            changeStatus();
        }
    };

    private void changeStatus() {
        Log.d(TAG, "TAG =3 " + isOn);
        WritableMap event = Arguments.createMap();
        event.putBoolean("isOn", isOn);
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "statusChange",
                event);
        updateButton();
    }

    private void updateButton() {
        Log.d(TAG, "TAG =0 " + isOn);
        if (isOn) {
            setBackgroundColor(Color.YELLOW);
            setText("Switch ON");
        } else {
            setBackgroundColor(Color.GRAY);
            setText("Switch OFF");
        }
    }
}
