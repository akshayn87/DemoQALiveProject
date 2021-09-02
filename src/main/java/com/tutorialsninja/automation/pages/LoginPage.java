package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class LoginPage {

	public LoginPage() {

		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(id = "input-email")
	public static WebElement emailField;

	@FindBy(id = "input-password")
	public static WebElement password;

	@FindBy(css = "input[type='submit'][value='Login']")
	public static WebElement loginbutton;

	@FindBy(xpath = "//body/div[@id='account-login']/div[1]")
	public static WebElement mainwarning;

	@FindBy(linkText = "Forgotten Password")
	public static WebElement forgotPassword;

	public static void dologin(String email, String password) {

		Elements.TypeText(LoginPage.emailField, email);
		Elements.TypeText(LoginPage.password, password);
		Elements.click(LoginPage.loginbutton);

	}

}
