var app = angular.module("cerebro",["ngRoute","ngSanitize"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/home",{templateUrl : "home.html",controller : "cerebroController"})
	
	// core java start
	.when("/coreJava",{templateUrl : "coreJava.html",controller : "cerebroController"})
	.when("/string",{templateUrl : "string.html",controller : "cerebroController"})
	.when("/date",{templateUrl : "date.html",controller : "cerebroController"})
	.when("/list",{templateUrl : "list.html",controller : "cerebroController"})
	.when("/map",{templateUrl : "map.html",controller : "cerebroController"})
	.when("/annotations",{templateUrl : "annotations.html",controller : "cerebroController"})
	.when("/enums",{templateUrl : "enums.html",controller : "cerebroController"})
	.when("/aspectJ",{templateUrl : "aspectJ.html",controller : "cerebroController"})
	.when("/fileIO",{templateUrl : "fileIO.html",controller : "cerebroController"})
	.when("/multiThreading",{templateUrl : "multiThreading.html",controller : "cerebroController"})
	.when("/dynamicProxies",{templateUrl : "dynamicProxies.html",controller : "cerebroController"})
	.when("/java8CollectionStreams",{templateUrl : "java8CollectionStreams.html",controller : "cerebroController"})
	.when("/java8Function",{templateUrl : "java8Function.html",controller : "cerebroController"})
	.when("/immutableObject",{templateUrl : "immutableObject.html",controller : "cerebroController"})
	.when("/singletonObject",{templateUrl : "singletonObject.html",controller : "cerebroController"})
	.when("/hashMapInternals",{templateUrl : "hashMapInternals.html",controller : "cerebroController"})
	.when("/java8Predicate",{templateUrl : "java8Predicate.html",controller : "cerebroController"})
	.when("/regex",{templateUrl : "regex.html",controller : "cerebroController"})
	.when("/set",{templateUrl : "set.html",controller : "cerebroController"})
	.when("/reflectionApi",{templateUrl : "reflectionApi.html",controller : "cerebroController"})
	.when("/messageFormat",{templateUrl : "messageFormat.html",controller : "cerebroController"})
	.when("/enumLookupMap",{templateUrl : "enumLookupMap.html",controller : "cerebroController"})
	.when("/javaUtilOptional",{templateUrl : "javaUtilOptional.html",controller : "cerebroController"})
	
	// testing
	.when("/affixAndScrollSpy",{templateUrl : "affixAndScrollSpy.html",controller : "cerebroController"})
	
	// interview questions
	.when("/interviewQuestions",{templateUrl : "interviewQuestions.html",controller : "cerebroController"})
	
	// hibernate 5 start
	.when("/hibernate",{templateUrl : "hibernate.html",controller : "cerebroController"})
	.when("/hibernate5HelloWorld",{templateUrl : "hibernate5HelloWorld.html",controller : "cerebroController"})

	// hibernate 4 start
	.when("/hibernate4Crud",{templateUrl : "hibernate4Crud.html",controller : "cerebroController"})
	.when("/hibernate4Merge",{templateUrl : "hibernate4Merge.html",controller : "cerebroController"})
	.when("/hibernate4Hql",{templateUrl : "hibernate4Hql.html",controller : "cerebroController"})
	
	// mybatis
	.when("/myBatis",{templateUrl : "myBatis.html",controller : "cerebroController"})
	.when("/myBatisCrud",{templateUrl : "myBatisCrud.html",controller : "cerebroController"})
	
	// maven start
	.when("/maven",{templateUrl : "maven.html",controller : "cerebroController"})
	.when("/installMaven",{templateUrl : "installMaven.html",controller : "cerebroController"})
	.when("/coreJavaProjectWithMaven",{templateUrl : "coreJavaProjectWithMaven.html",controller : "cerebroController"})
	.when("/compilerPlugin",{templateUrl : "compilerPlugin.html",controller : "cerebroController"})
	.when("/repositoriesTag",{templateUrl : "repositoriesTag.html",controller : "cerebroController"})
	.when("/jarPlugin",{templateUrl : "jarPlugin.html",controller : "cerebroController"})
	.when("/sourcePlugin",{templateUrl : "sourcePlugin.html",controller : "cerebroController"})
	.when("/javadocPlugin",{templateUrl : "javadocPlugin.html",controller : "cerebroController"})
	.when("/warPlugin",{templateUrl : "warPlugin.html",controller : "cerebroController"})
	.when("/pmdPlugin",{templateUrl : "pmdPlugin.html",controller : "cerebroController"})
	.when("/mavenJacoco",{templateUrl : "mavenJacoco.html",controller : "cerebroController"})
	.when("/mavenAssemblyPlugin",{templateUrl : "mavenAssemblyPlugin.html",controller : "cerebroController"})
	.when("/mavenJarPlugin",{templateUrl : "mavenJarPlugin.html",controller : "cerebroController"})
	
	// spring - start
	.when("/spring",{templateUrl : "spring.html",controller : "cerebroController"})
	.when("/springAOPJavaConfigHelloWorld",{templateUrl : "springAOPJavaConfigHelloWorld.html",controller : "cerebroController"})
	.when("/springSecurityFlow",{templateUrl : "springSecurityFlow.html",controller : "cerebroController"})
	.when("/springMVCHelloWorldXml",{templateUrl : "springMVCHelloWorldXml.html",controller : "cerebroController"})
	.when("/springMVCPropertiesFileXml",{templateUrl : "springMVCPropertiesFileXml.html",controller : "cerebroController"})
	.when("/springMVCFormXml",{templateUrl : "springMVCFormXml.html",controller : "cerebroController"})
	.when("/springMVCFormValidationXml",{templateUrl : "springMVCFormValidationXml.html",controller : "cerebroController"})
	.when("/springMVCFwdXml",{templateUrl : "springMVCFwdXml.html",controller : "cerebroController"})
	.when("/springMVCI18NXml",{templateUrl : "springMVCI18NXml.html",controller : "cerebroController"})
	.when("/springMVCRedirectXml",{templateUrl : "springMVCRedirectXml.html",controller : "cerebroController"})
	.when("/springMVCStaticFilesXml",{templateUrl : "springMVCStaticFilesXml.html",controller : "cerebroController"})
	.when("/springMVCContentNegotiationXml",{templateUrl : "springMVCContentNegotiationXml.html",controller : "cerebroController"})
	.when("/springMVCXmlJunitTesting",{templateUrl : "springMVCXmlJunitTesting.html",controller : "cerebroController"})
	.when("/springMVCCustomConfigXml",{templateUrl : "springMVCCustomConfigXml.html",controller : "cerebroController"})
	.when("/springORMHelloWorldXml",{templateUrl : "springORMHelloWorldXml.html",controller : "cerebroController"})
	.when("/springMVCMultiConfigXml",{templateUrl : "springMVCMultiConfigXml.html",controller : "cerebroController"})
	.when("/springBootHelloWorld",{templateUrl : "springBootHelloWorld.html",controller : "cerebroController"})
	.when("/springBootJsonAndXml",{templateUrl : "springBootJsonAndXml.html",controller : "cerebroController"})
	.when("/springBootJetty",{templateUrl : "springBootJetty.html",controller : "cerebroController"})
	.when("/springMvcDataJpa",{templateUrl : "springMvcDataJpa.html",controller : "cerebroController"})
	.when("/springMvcJpa",{templateUrl : "springMvcJpa.html",controller : "cerebroController"})
	.when("/springBootFileUpload",{templateUrl : "springBootFileUpload.html",controller : "cerebroController"})
	.when("/springDIHelloWorldXml",{templateUrl : "springDIHelloWorldXml.html",controller : "cerebroController"})
	.when("/springInjectCollectionsXml",{templateUrl : "springInjectCollectionsXml.html",controller : "cerebroController"})
	.when("/springDIConstructorInjectionXml",{templateUrl : "springDIConstructorInjectionXml.html",controller : "cerebroController"})
	.when("/springDIAnnotations",{templateUrl : "springDIAnnotations.html",controller : "cerebroController"})
	.when("/springDIJavaConfig",{templateUrl : "springDIJavaConfig.html",controller : "cerebroController"})
	.when("/springMVCHelloWorldJavaConfig",{templateUrl : "springMVCHelloWorldJavaConfig.html",controller : "cerebroController"})
	.when("/springJavaMultiConfig",{templateUrl : "springJavaMultiConfig.html",controller : "cerebroController"})
	.when("/springResourceBundleXml",{templateUrl : "springResourceBundleXml.html",controller : "cerebroController"})
	.when("/beanPostProcessorXml",{templateUrl : "beanPostProcessorXml.html",controller : "cerebroController"})
	.when("/propertiesInjectionXml",{templateUrl : "propertiesInjectionXml.html",controller : "cerebroController"})
	.when("/springBootStaticFiles",{templateUrl : "springBootStaticFiles.html",controller : "cerebroController"})
	.when("/springBootMultiplePropsFiles",{templateUrl : "springBootMultiplePropsFiles.html",controller : "cerebroController"})
	.when("/injectPropertyAsString",{templateUrl : "injectPropertyAsString.html",controller : "cerebroController"})
	.when("/injectStringFromPropsFile",{templateUrl : "injectStringFromPropsFile.html",controller : "cerebroController"})
	.when("/springBootDataSource",{templateUrl : "springBootDataSource.html",controller : "cerebroController"})
	.when("/springBootMockito",{templateUrl : "springBootMockito.html",controller : "cerebroController"})
	.when("/springBootIT",{templateUrl : "springBootIT.html",controller : "cerebroController"})
	.when("/springBootWebIT",{templateUrl : "springBootWebIT.html",controller : "cerebroController"})
	.when("/springBootCustomDataSource",{templateUrl : "springBootCustomDataSource.html",controller : "cerebroController"})
	.when("/springRestExceptionHandling1",{templateUrl : "springRestExceptionHandling1.html",controller : "cerebroController"})
	.when("/springRestExceptionHandling2",{templateUrl : "springRestExceptionHandling2.html",controller : "cerebroController"})
	.when("/springRestExceptionHandling3",{templateUrl : "springRestExceptionHandling3.html",controller : "cerebroController"})
	.when("/springRestExceptionHandling4",{templateUrl : "springRestExceptionHandling4.html",controller : "cerebroController"})
	.when("/springRestExceptionHandling5",{templateUrl : "springRestExceptionHandling5.html",controller : "cerebroController"})
	.when("/springRestExceptionHandling6",{templateUrl : "springRestExceptionHandling6.html",controller : "cerebroController"})
	.when("/springRestLog4J",{templateUrl : "springRestLog4J.html",controller : "cerebroController"})
	.when("/springRestHibernate4",{templateUrl : "springRestHibernate4.html",controller : "cerebroController"})
	
	.when("/springBootFlywayDB",{templateUrl : "springBootFlywayDB.html",controller : "cerebroController"})
	.when("/springBootMultipleDataSources",{templateUrl : "springBootMultipleDataSources.html",controller : "cerebroController"})
	.when("/springBootCli",{templateUrl : "springBootCli.html",controller : "cerebroController"})
	
	// tools start
	.when("/tools",{templateUrl : "tools.html",controller : "cerebroController"})
	.when("/jacksonReadJson",{templateUrl : "readJson.html",controller : "cerebroController"})
	.when("/openCSV",{templateUrl : "openCSV.html",controller : "cerebroController"})
	.when("/sonarSetup",{templateUrl : "sonarSetup.html",controller : "cerebroController"})
	.when("/sonarqubeCodeCoverage",{templateUrl : "sonarqubeCodeCoverage.html",controller : "cerebroController"})
	
	// unit testing start
	.when("/unitTesting",{templateUrl : "unitTesting.html",controller : "cerebroController"})
	.when("/junit",{templateUrl : "junit.html",controller : "cerebroController"})
	.when("/junitHelloWorld",{templateUrl : "junitHelloWorld.html",controller : "cerebroController"})
	.when("/mockito",{templateUrl : "mockito.html",controller : "cerebroController"})
	
	// ant start
	.when("/ant",{templateUrl : "ant.html",controller : "cerebroController"})
	.when("/antJacoco",{templateUrl : "antJacoco.html",controller : "cerebroController"})
	
	// gradle start
	.when("/gradle",{templateUrl : "gradle.html",controller : "cerebroController"})
	
	// DB start
	.when("/db",{templateUrl : "db.html",controller : "cerebroController"})
	.when("/h2DB",{templateUrl : "h2DB.html",controller : "cerebroController"})
	.when("/practiceDBScripts",{templateUrl : "practiceDBScripts.html",controller : "cerebroController"})
	.when("/dbJoins",{templateUrl : "dbJoins.html",controller : "cerebroController"})
	
	// Scala start
	.when("/scala",{templateUrl : "scala.html",controller : "cerebroController"})
	.when("/installScala",{templateUrl : "installScala.html",controller : "cerebroController"})
	.when("/scalaHelloWorldWithSbt",{templateUrl : "scalaHelloWorldWithSbt.html",controller : "cerebroController"})
	
	// Apache camel start
	.when("/camel",{templateUrl : "camel.html",controller : "cerebroController"})
	.when("/camelUnmarshalCsv",{templateUrl : "camelUnmarshalCsv.html",controller : "cerebroController"})
	.when("/camelMarshalCsv",{templateUrl : "camelMarshalCsv.html",controller : "cerebroController"})
	.when("/camelHelloWorld",{templateUrl : "camelHelloWorld.html",controller : "cerebroController"})
	.when("/camelWithBean",{templateUrl : "camelWithBean.html",controller : "cerebroController"})
	.when("/camelWithBeanAndProcessor",{templateUrl : "camelWithBeanAndProcessor.html",controller : "cerebroController"})
	.when("/camelWithSpring",{templateUrl : "camelWithSpring.html",controller : "cerebroController"})
	.when("/camelSpringProcessorBean",{templateUrl : "camelSpringProcessorBean.html",controller : "cerebroController"})
	
	//REST web services start
	.when("/webservices",{templateUrl : "webservices.html",controller : "cerebroController"})
	.when("/jerseyRestGet",{templateUrl : "jerseyRestGet.html",controller : "cerebroController"})
	.when("/jerseyRestPost",{templateUrl : "jerseyRestPost.html",controller : "cerebroController"})
	.when("/jerseyRestPut",{templateUrl : "jerseyRestPut.html",controller : "cerebroController"})
	.when("/jerseyRestDelete",{templateUrl : "jerseyRestDelete.html",controller : "cerebroController"})
	.when("/springRestGet",{templateUrl : "springRestGet.html",controller : "cerebroController"})
	.when("/springRestPost",{templateUrl : "springRestPost.html",controller : "cerebroController"})
	.when("/springRestPUT",{templateUrl : "springRestPUT.html",controller : "cerebroController"})
	.when("/springRestDELETE",{templateUrl : "springRestDELETE.html",controller : "cerebroController"})
	.when("/jerseyFileUpload",{templateUrl : "jerseyFileUpload.html",controller : "cerebroController"})
	.when("/jerseyFileDownload",{templateUrl : "jerseyFileDownload.html",controller : "cerebroController"})
	.when("/jerseyExceptionHandling",{templateUrl : "jerseyExceptionHandling.html",controller : "cerebroController"})
	.when("/springRestPostPolymorphism",{templateUrl : "springRestPostPolymorphism.html",controller : "cerebroController"})
	
	// mongo db start
	.when("/mongoDB",{templateUrl : "mongoDB.html",controller : "cerebroController"})
	.when("/mongodbHelloworld",{templateUrl : "mongodbHelloworld.html",controller : "cerebroController"})
	
	// design patterns start
	.when("/designPatterns",{templateUrl : "designPatterns.html",controller : "cerebroController"})
	
	// JDK tools start
	.when("/jdkTools",{templateUrl : "jdkTools.html",controller : "cerebroController"})
	.when("/native2ascii",{templateUrl : "native2ascii.html",controller : "cerebroController"})

	// JVM, Garbage Collection (GC) start
	.when("/jvm",{templateUrl : "jvm.html",controller : "cerebroController"})
	.when("/gc",{templateUrl : "gc.html",controller : "cerebroController"})
	
	// Angular JS 1
	.when("/angular1",{templateUrl : "angular1.html",controller : "cerebroController"})
	.when("/angular1HelloWorld",{templateUrl : "angular1HelloWorld.html",controller : "cerebroController"})
	.when("/printMessage",{templateUrl : "printMessage.html",controller : "cerebroController"})
	.when("/printMessageWithIIFY",{templateUrl : "printMessageWithIIFY.html",controller : "cerebroController"})
	.when("/controller1",{templateUrl : "controller1.html",controller : "cerebroController"})
	.when("/httpGet",{templateUrl : "httpGet.html",controller : "cerebroController"})
	.when("/ngModel",{templateUrl : "ngModel.html",controller : "cerebroController"})
	.when("/ngClick",{templateUrl : "ngClick.html",controller : "cerebroController"})
	.when("/ngSubmit",{templateUrl : "ngSubmit.html",controller : "cerebroController"})
	.when("/ngRepeat",{templateUrl : "ngRepeat.html",controller : "cerebroController"})
	.when("/intervalService",{templateUrl : "intervalService.html",controller : "cerebroController"})
	.when("/windowService",{templateUrl : "windowService.html",controller : "cerebroController"})
	.when("/ngInclude",{templateUrl : "ngInclude.html",controller : "cerebroController"})
	.when("/customService",{templateUrl : "customService.html",controller : "cerebroController"})
	.when("/navigateToSpecificIdInPage",{templateUrl : "navigateToSpecificIdInPage.html",controller : "cerebroController"})
	.when("/ngRouteTemplate",{templateUrl : "ngRouteTemplate.html",controller : "cerebroController"})
	.when("/logService",{templateUrl : "logService.html",controller : "cerebroController"})
	
	// search
	.when("/search",{templateUrl : "search.html",controller : "cerebroController"})
	
	// definitions start
	.when("/definitions",{templateUrl : "definitions.html",controller : "definitionsController"})
	.when("/addDefinitions",{templateUrl : "addDefinitions.html",controller : "definitionsController"})
	
	;
});

var CerebroController = function($scope, $location, $anchorScroll, breadCrumbsService){

	$(document).ready(function(e){
	    $('.search-panel .dropdown-menu').find('a').click(function(e) {
			var param = $(this).attr("href");
			var concept = $(this).text();
			
			console.log("param: "+param+", concept: "+concept);
			
			$('.search-panel span#search_concept').text(concept);
			$('.input-group #search_param').val(param);
		});
	});
	
	$scope.navigate = function(id){
		$location.hash(id);
		$anchorScroll();
	};
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('#back-to-top').fadeIn();
		}else{
			$('#back-to-top').fadeOut();
		}
	});
	
	$scope.scrollUp = function(){
		$('body,html').animate({scrollTop: 0}, 800);
        return false;
	};
	
	$scope.buildBreadCrumbs = function(name, link){
		breadCrumbsService.addBreadCrumb(name, link);
	};
	
	$scope.popBreadCrumb = function(index){
		breadCrumbsService.popBreadCrumb(index);
		
		// Rest Search box - drop down
		$('.search-panel span#search_concept').text("All");
		$('.input-group #search_param').val("All");
	}
	
	$scope.breadCrumbs = breadCrumbsService.getNavigations();
};

var DefinitionsController = function($scope, $location, $anchorScroll, $http){
	var definitionsMessage = " Definitions";
	var config = {"Content-Type": "application/json"};
	
	$scope.message = "Cerebro Definitions";
	$scope.definition = {'description':'','details':''};
	$scope.definitionType = {
		selected: null,
		types : [
		         {key: "Core Java", value: "coreJavaDefs"},	
		         {key: "Apache Kafka", value: "apacheKafkaDefs"},
		         {key: "Groovy", value: "groovyDefs"},
		         {key: "Maven", value: "mavenDefs"},
		         {key: "Jenkins", value: "jenkinsDefs"},
		         {key: "MongoDB", value: "mongodbDefs"},
		         {key: "Docker", value: "dockerDefs"},
		         {key: "Mockito", value: "mockitoDefs"},
		         {key: "Scala", value: "scalaDefs"},
		         {key: "Multithreading", value: "concurrencyDefs"}]
	};
	
	var onSuccess = function(response){
		$scope.definitionsList = response.data._embedded.definitionsList;
	};
	
	var onError = function(){
		console.log("onError()");
	};
	
	var onAddSuccess = function(){
		$scope.addDefinitionStatus = "add success";
		$scope.definition.description = '';
		$scope.definition.details = '';
	}
	
	var onAddError = function(){
		$scope.addDefinitionStatus = "add error";
	}
	
	var getDefinitions = function(){
		var defType = $scope.definitionType.selected;
		$http.get("/api/"+defType).then(onSuccess, onError);
		$scope.message = defType + definitionsMessage;
	};
	
	var addDefintions = function(){
		console.log($scope.definitionType.selected);
		var defType = $scope.definitionType.selected;
		$http.post("/api/"+defType,$scope.definition,config).then(onAddSuccess, onAddError);
	}
	
	$scope.getDefinitions = getDefinitions;
	$scope.addDefintions = addDefintions;
};

app.service('breadCrumbsService', function(){
	var navigations = new Array();
	var keys = new Array();
	var prefix = "cerebro.html";
	
	this.addBreadCrumb = function(name, link){
		link = prefix + link;
		if(keys.indexOf(name) == -1){
			navigations.push({name, link});
			keys.push(name);
		}
	}
	
	this.getNavigations = function(){
		return navigations; 
	};
	
	this.popBreadCrumb = function(index){
		index = index + 1;
		navigations.splice(index, navigations.length);
		keys.splice(index, keys.length);
	}
	
});

var searchController = function($scope, $http, $location, $log, searchService){
	var config = {"Content-Type": "application/json"};
//	$scope.searchText = "Enter text to Search";
		
		
		$scope.search = function(){
			console.log("search text: "+$scope.searchText);
			$log.info("search text: "+$scope.searchText);
			$http.post("/cerebroSearch",$scope.searchText,config)
				 .then(function(response){
					 $log.info("inside sucess response: "+response);
					 searchService.setSearchResults(response.data);
					 $scope.searchResults = searchService.getSearchResults();
					 $log.info($scope.searchResults);
					 $location.url("search");
				 }, function(){
					 $log.info("inside error response");
				 });
			
//			$location.url("search");
		}
		
		$scope.searchResults = searchService.getSearchResults();
}

app.service("searchService", function(){
	var searchResults;
	
	this.setSearchResults = function(data){
		searchResults = data;
	}
	
	this.getSearchResults = function(){
		return searchResults;
	}
});

app.controller("cerebroController",["$scope", "$location", "$anchorScroll", "breadCrumbsService", CerebroController] );
app.controller("definitionsController",["$scope", "$location", "$anchorScroll","$http", DefinitionsController]);
app.controller("searchController", ["$scope", "$http", "$location", "$log", "searchService", searchController]);