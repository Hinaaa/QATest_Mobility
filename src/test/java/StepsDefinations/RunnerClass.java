package StepsDefinations;


import io.cucumber.core.cli.Main;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
	//,tags ="@smoketest" //if you want to add tagged scenarios

    features = "src/test/resources/Features",
    glue = {"StepsDefinations"},
    monochrome = true,
    		plugin = { "pretty", "junit:target/JUnitReports/report.xml",
    		        "html:target/HtmlReports", "json:target/cucumber.json"}
)
public class RunnerClass {
    public static void main(String[] argv) {
        Main.main(argv);
    }
}
