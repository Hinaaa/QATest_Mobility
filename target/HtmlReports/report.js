$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/test1_Login.feature");
formatter.feature({
  "name": "Validate Login with Valid and Invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate Login Successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is able to see login page and \u003cloginLabel\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cemailAddress\u003e E-mail textbox",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e Password textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "name": "validate user login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "password",
        "loginLabel"
      ]
    },
    {
      "cells": [
        "qatest@wundermobility.com",
        "12345678",
        "QA Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Login Successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class StepsDefinations.loginTestSteps\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 34 more\nCaused by: java.lang.ExceptionInInitializerError\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:222)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:220)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:105)\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:160)\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\n\tat PageFactory.LoginPageFactory.\u003cinit\u003e(LoginPageFactory.java:39)\n\tat StepsDefinations.loginTestSteps.\u003cinit\u003e(loginTestSteps.java:59)\n\t... 40 more\nCaused by: net.sf.cglib.core.CodeGenerationException: java.lang.reflect.InaccessibleObjectException--\u003eUnable to make protected final java.lang.Class java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain) throws java.lang.ClassFormatError accessible: module java.base does not \"opens java.lang\" to unnamed module @17695df3\n\tat net.sf.cglib.core.ReflectUtils.defineClass(ReflectUtils.java:464)\n\tat net.sf.cglib.core.AbstractClassGenerator.generate(AbstractClassGenerator.java:339)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:96)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:94)\n\tat net.sf.cglib.core.internal.LoadingCache$2.call(LoadingCache.java:54)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat net.sf.cglib.core.internal.LoadingCache.createEntry(LoadingCache.java:61)\n\tat net.sf.cglib.core.internal.LoadingCache.get(LoadingCache.java:34)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData.get(AbstractClassGenerator.java:119)\n\tat net.sf.cglib.core.AbstractClassGenerator.create(AbstractClassGenerator.java:294)\n\tat net.sf.cglib.core.KeyFactory$Generator.create(KeyFactory.java:221)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:174)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:153)\n\tat net.sf.cglib.proxy.Enhancer.\u003cclinit\u003e(Enhancer.java:73)\n\t... 51 more\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make protected final java.lang.Class java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain) throws java.lang.ClassFormatError accessible: module java.base does not \"opens java.lang\" to unnamed module @17695df3\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\n\tat java.base/java.lang.reflect.Method.checkCanSetAccessible(Method.java:199)\n\tat java.base/java.lang.reflect.Method.setAccessible(Method.java:193)\n\tat net.sf.cglib.core.ReflectUtils$1.run(ReflectUtils.java:61)\n\tat java.base/java.security.AccessController.doPrivileged(AccessController.java:569)\n\tat net.sf.cglib.core.ReflectUtils.\u003cclinit\u003e(ReflectUtils.java:52)\n\tat net.sf.cglib.core.KeyFactory$Generator.generateClass(KeyFactory.java:243)\n\tat net.sf.cglib.core.DefaultGeneratorStrategy.generate(DefaultGeneratorStrategy.java:25)\n\tat net.sf.cglib.core.AbstractClassGenerator.generate(AbstractClassGenerator.java:332)\n\t... 63 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user is able to see login page and QA Test",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_is_able_to_see_login_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters qatest@wundermobility.com E-mail textbox",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_enters_E_mail_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters 12345678 Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_enters_Password_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate user login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.validate_user_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class StepsDefinations.loginTestSteps\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 34 more\nCaused by: java.lang.NoClassDefFoundError: Could not initialize class net.sf.cglib.proxy.Enhancer\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:222)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:220)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:105)\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:160)\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\n\tat PageFactory.LoginPageFactory.\u003cinit\u003e(LoginPageFactory.java:39)\n\tat StepsDefinations.loginTestSteps.\u003cinit\u003e(loginTestSteps.java:59)\n\t... 40 more\nCaused by: java.lang.ExceptionInInitializerError: Exception net.sf.cglib.core.CodeGenerationException: java.lang.reflect.InaccessibleObjectException--\u003eUnable to make protected final java.lang.Class java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain) throws java.lang.ClassFormatError accessible: module java.base does not \"opens java.lang\" to unnamed module @17695df3 [in thread \"main\"]\n\tat net.sf.cglib.core.ReflectUtils.defineClass(ReflectUtils.java:464)\n\tat net.sf.cglib.core.AbstractClassGenerator.generate(AbstractClassGenerator.java:339)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:96)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:94)\n\tat net.sf.cglib.core.internal.LoadingCache$2.call(LoadingCache.java:54)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat net.sf.cglib.core.internal.LoadingCache.createEntry(LoadingCache.java:61)\n\tat net.sf.cglib.core.internal.LoadingCache.get(LoadingCache.java:34)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData.get(AbstractClassGenerator.java:119)\n\tat net.sf.cglib.core.AbstractClassGenerator.create(AbstractClassGenerator.java:294)\n\tat net.sf.cglib.core.KeyFactory$Generator.create(KeyFactory.java:221)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:174)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:153)\n\tat net.sf.cglib.proxy.Enhancer.\u003cclinit\u003e(Enhancer.java:73)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:222)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:220)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:105)\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:160)\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\n\tat PageFactory.LoginPageFactory.\u003cinit\u003e(LoginPageFactory.java:39)\n\tat StepsDefinations.loginTestSteps.\u003cinit\u003e(loginTestSteps.java:59)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\t... 27 more\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate Login Unsuccessfully with Invalid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is able to see login page and \u003cloginLabel\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cemailAddress\u003e E-mail textbox",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e Password textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "name": "validate user unable to login and error message \u003cInvalidCredentialMessage\u003e appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "password",
        "loginLabel",
        "InvalidCredentialMessage"
      ]
    },
    {
      "cells": [
        "qatest@wundermobility.com",
        "12349999",
        "QA Test",
        "Invalid credentials! Please check your data."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Login Unsuccessfully with Invalid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class StepsDefinations.loginTestSteps\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 34 more\nCaused by: java.lang.NoClassDefFoundError: Could not initialize class net.sf.cglib.proxy.Enhancer\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:222)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:220)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:105)\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:160)\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\n\tat PageFactory.LoginPageFactory.\u003cinit\u003e(LoginPageFactory.java:39)\n\tat StepsDefinations.loginTestSteps.\u003cinit\u003e(loginTestSteps.java:59)\n\t... 40 more\nCaused by: java.lang.ExceptionInInitializerError: Exception net.sf.cglib.core.CodeGenerationException: java.lang.reflect.InaccessibleObjectException--\u003eUnable to make protected final java.lang.Class java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain) throws java.lang.ClassFormatError accessible: module java.base does not \"opens java.lang\" to unnamed module @17695df3 [in thread \"main\"]\n\tat net.sf.cglib.core.ReflectUtils.defineClass(ReflectUtils.java:464)\n\tat net.sf.cglib.core.AbstractClassGenerator.generate(AbstractClassGenerator.java:339)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:96)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:94)\n\tat net.sf.cglib.core.internal.LoadingCache$2.call(LoadingCache.java:54)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat net.sf.cglib.core.internal.LoadingCache.createEntry(LoadingCache.java:61)\n\tat net.sf.cglib.core.internal.LoadingCache.get(LoadingCache.java:34)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData.get(AbstractClassGenerator.java:119)\n\tat net.sf.cglib.core.AbstractClassGenerator.create(AbstractClassGenerator.java:294)\n\tat net.sf.cglib.core.KeyFactory$Generator.create(KeyFactory.java:221)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:174)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:153)\n\tat net.sf.cglib.proxy.Enhancer.\u003cclinit\u003e(Enhancer.java:73)\n\t... 51 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user is able to see login page and QA Test",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_is_able_to_see_login_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters qatest@wundermobility.com E-mail textbox",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_enters_E_mail_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters 12349999 Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_enters_Password_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate user unable to login and error message Invalid credentials! Please check your data. appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinations.loginTestSteps.validate_user_unable_to_login_and_error_message_Invalid_credentials_Please_check_your_data_appear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class StepsDefinations.loginTestSteps\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 34 more\nCaused by: java.lang.NoClassDefFoundError: Could not initialize class net.sf.cglib.proxy.Enhancer\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:222)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:220)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:105)\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:160)\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\n\tat PageFactory.LoginPageFactory.\u003cinit\u003e(LoginPageFactory.java:39)\n\tat StepsDefinations.loginTestSteps.\u003cinit\u003e(loginTestSteps.java:59)\n\t... 40 more\nCaused by: java.lang.ExceptionInInitializerError: Exception net.sf.cglib.core.CodeGenerationException: java.lang.reflect.InaccessibleObjectException--\u003eUnable to make protected final java.lang.Class java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int,java.security.ProtectionDomain) throws java.lang.ClassFormatError accessible: module java.base does not \"opens java.lang\" to unnamed module @17695df3 [in thread \"main\"]\n\tat net.sf.cglib.core.ReflectUtils.defineClass(ReflectUtils.java:464)\n\tat net.sf.cglib.core.AbstractClassGenerator.generate(AbstractClassGenerator.java:339)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:96)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData$3.apply(AbstractClassGenerator.java:94)\n\tat net.sf.cglib.core.internal.LoadingCache$2.call(LoadingCache.java:54)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat net.sf.cglib.core.internal.LoadingCache.createEntry(LoadingCache.java:61)\n\tat net.sf.cglib.core.internal.LoadingCache.get(LoadingCache.java:34)\n\tat net.sf.cglib.core.AbstractClassGenerator$ClassLoaderData.get(AbstractClassGenerator.java:119)\n\tat net.sf.cglib.core.AbstractClassGenerator.create(AbstractClassGenerator.java:294)\n\tat net.sf.cglib.core.KeyFactory$Generator.create(KeyFactory.java:221)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:174)\n\tat net.sf.cglib.core.KeyFactory.create(KeyFactory.java:153)\n\tat net.sf.cglib.proxy.Enhancer.\u003cclinit\u003e(Enhancer.java:73)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:52)\n\tat io.appium.java_client.pagefactory.utils.ProxyFactory.getEnhancedProxy(ProxyFactory.java:33)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.proxyForAnElement(AppiumFieldDecorator.java:222)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.access$0(AppiumFieldDecorator.java:220)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator$1.proxyForLocator(AppiumFieldDecorator.java:105)\n\tat org.openqa.selenium.support.pagefactory.DefaultFieldDecorator.decorate(DefaultFieldDecorator.java:62)\n\tat io.appium.java_client.pagefactory.AppiumFieldDecorator.decorate(AppiumFieldDecorator.java:160)\n\tat org.openqa.selenium.support.PageFactory.proxyFields(PageFactory.java:113)\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:105)\n\tat PageFactory.LoginPageFactory.\u003cinit\u003e(LoginPageFactory.java:39)\n\tat StepsDefinations.loginTestSteps.\u003cinit\u003e(loginTestSteps.java:59)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\t... 27 more\n",
  "status": "failed"
});
});