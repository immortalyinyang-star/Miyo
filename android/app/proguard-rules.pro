-keep class com.facebook.react.** { *; }
-keep class com.facebook.jni.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class javax.** { *; }
-keep class java.lang.String { *; }
-keep class java.lang.Object { *; }

-keepclassmembers class com.miyo.reader.** {
    <init>(...);
    *** <fields>;
    *** <methods>;
}
