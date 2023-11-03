package StepsDefinations;

import org.junit.Assert;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.time.Duration;
import java.util.NoSuchElementException;

import org.openqa.selenium.support.ui.Wait;


import PageFactory.LoginPageFactory;

public class loginTestSteps {

	private AndroidDriver<AndroidElement> driver;
    private static final String HOST = "http://127.0.0.1"; // Set host
    private static final String PORT = "4723"; // Set port
    @Before
    public void setUp() throws MalformedURLException {
        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
        desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "android");
        desiredCapabilities.setCapability("appPackage", "com.wundermobility.qatest");
        desiredCapabilities.setCapability("appActivity", "com.wundermobility.qatest.MainActivity");
        desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
        desiredCapabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 3600);
        desiredCapabilities.setCapability(MobileCapabilityType.NO_RESET, true);
        desiredCapabilities.setCapability("appium:ensureWebviewsHavePages", true);
        desiredCapabilities.setCapability("appium:nativeWebScreenshot", true);
        desiredCapabilities.setCapability("appium:connectHardwareKeyboard", true);

        // Create the URL
        URL remoteUrl = getUrl(HOST, PORT);

        // Initialising AndroidDriver with the URL and desired capabilities
        driver = new AndroidDriver<>(remoteUrl, desiredCapabilities);
    }

    private URL getUrl(String host, String port) {
        try {
            return new URL(host + ":" + port + "/wd/hub");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return null;
    }

    LoginPageFactory loginObject = new LoginPageFactory(driver);

    @Given("^user is able to see login page and (.*)$")
    public void user_is_able_to_see_login_page(String loginLabel) {
        // login label appears
    	String pageSource = driver.getPageSource();
		Assert.assertTrue(pageSource.contains(loginLabel));
		Assert.assertTrue(driver.getTitle().contains(loginLabel));
    }

    @When("^user enters (.*) E-mail textbox$")
    public void user_enters_E_mail_textbox(String email) {
    	loginObject.enterUsername(email);
    }

    @And("^user enters (.*) Password textbox$")
    public void user_enters_Password_textbox(String password) {
    	loginObject.enterPassword(password);
    }

    @And("user clicks login button")
    public void user_clicks_login_button() {
    	loginObject.clickSubmit();
    }

    @Then("validate user login successfully")
    public void validate_user_login_successfully() {
    	
    	 Wait<AndroidDriver<AndroidElement>> wait = new FluentWait<>(driver)
    		        .withTimeout(Duration.ofSeconds(10))
    		        .pollingEvery(Duration.ofMillis(500))
    		        .ignoring(NoSuchElementException.class);

    		    // Wait for the page to open successfully by checking the presence of an element
    		    By elementXPath = By.xpath("//android.widget.FrameLayout[@resource-id='com.wundermobility.qatest:id/mapView']/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout[2]");

    		    wait.until(ExpectedConditions.presenceOfElementLocated(elementXPath));
    }

    @Then("^validate user unable to login and error message (.*) appear$")
    public void validate_user_unable_to_login_and_error_message_Invalid_credentials_Please_check_your_data_appear(String expectedErrorMessage) {
    	String actualErrorMessage = loginObject.messageInvalidCredentials();
    	Assert.assertEquals(actualErrorMessage, expectedErrorMessage); //validate error message on invalid credential
    }

    
    @After
    public void closeBrowser() {
        driver.close();
        driver.quit();
     
    }
}



