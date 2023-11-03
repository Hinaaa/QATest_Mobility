package PageFactory;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageFactory {
	 private AndroidDriver<AndroidElement> driver;

	 /*   public LoginPageFactory(AndroidDriver<AndroidElement> driver) {
	        this.driver = driver;
	        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	    }
*/
	 @FindBy(id = "com.wundermobility.qatest:id/edtLoginEmail")
	 AndroidElement txt_loginEmailField;
	 
    @FindBy(id = "com.wundermobility.qatest:id/edtLoginPassword")
    private AndroidElement txt_loginPasswordField;

    @FindBy(id = "com.wundermobility.qatest:id/btnLogin")
    private AndroidElement btn_loginButton;

    @FindBy(id = "your_app_package:id/txt_searchResult")
    private AndroidElement txtSearchResult;

    @FindBy(id = "com.wundermobility.qatest:id/txtLogin")
    private AndroidElement lbl_login;

    @FindBy(id = "com.wundermobility.qatest:id/txtLoginError")
    private AndroidElement lbl_InavalidCredentialMessage;

    
    public LoginPageFactory(AndroidDriver<AndroidElement> driver) {
        this.driver = driver;
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }
    
    ///here
	public void enterUsername(String email) {
		 txt_loginEmailField.sendKeys(email);
		
	}

	public void enterPassword(String password) {
		txt_loginPasswordField.sendKeys(password);
		
	}
	
	public void clickSubmit() {
		btn_loginButton.click();
		
	}


	public String messageInvalidCredentials() {
		return lbl_InavalidCredentialMessage.getText();
	}
}
