package sample;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="sam/TestMeApp.feature",
//plugin="html:target\\HtmlReport")
plugin="json:target\\Jsonreport.json")

public class Samplerun {

}