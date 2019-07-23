package pattlu.pattlu;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;




@RunWith(Cucumber.class)
@CucumberOptions(features="gopu/pattlu.feature",

				tags={"@login"},
				//tags={"~@regression"}, //ignore regression
				//tags={"@login","@regression"}, - AND case
				//tags={"@login,@regression"},
				plugin="html:target\\HtmlReport") // OR case
				//plugin="json:target\\Jsonreport.json")
				//plugin="junit:C:\\Users\\gopinathan.murugesan\\Downloads\\xmlreport.xml\")"

public class pattlurun {

}
