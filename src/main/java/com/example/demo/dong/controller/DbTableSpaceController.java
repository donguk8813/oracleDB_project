package com.example.demo.dong.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.dong.domain.DbColumns;
import com.example.demo.dong.domain.DbTablespaceChartDomain;
import com.example.demo.dong.service.DbDDLService;
import com.example.demo.dong.service.DbTableSpaceService;

@Controller
@RequestMapping("/")
public class DbTableSpaceController {

	@Autowired
	private DbTableSpaceService dbTableSpaceService;

	@Autowired
	private DbDDLService dbDDLService;

	@RequestMapping(value = "/dbTableSpace", method = RequestMethod.POST)
	public ModelAndView getDbTableSpace() throws Exception {
		ModelAndView mav = new ModelAndView();

		// List<String> tableSpaceList = dbTableSpaceService.selectDbTableSpace();
		//
		// System.out.println("스페이스 개수 : " + tableSpaceList.size());

		mav.setViewName("/dbTablespace");
		// mav.addObject("dbTableSpace", tableSpaceList);

		return mav;

	}

	@RequestMapping(value = "/dbTableSpace2", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getDbTableSpace2() throws Exception {

		Map<String, Object> resMap = new HashMap<String, Object>();

		List<String> tableSpaceList = dbTableSpaceService.selectDbTableSpace();

		System.out.println("스페이스 개수 : " + tableSpaceList.size());

		resMap.put("dbTableSpace", tableSpaceList);

		return resMap;

	}

	@RequestMapping(value = "/views/selectDbTablespace", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getDbTableSpaceChart(String tablespaceName) throws Exception {
		tablespaceName = tablespaceName.trim();

		List<String> tableSpaceList = dbTableSpaceService.selectDbTableSpace();

		Map<String, Object> resMap = new HashMap<String, Object>();

		DbTablespaceChartDomain tbsChart = dbTableSpaceService.selectDbTablespaceChart(tablespaceName);

		// List<String> userName = dbTableSpaceService.selectDbUsers(tablespaceName);

		System.out.println(tbsChart);

		resMap.put("tbsChart", tbsChart);
		resMap.put("dbTableSpace", tableSpaceList);
		// resMap.put("dbUsers", userName);

		return resMap;

	}

	@RequestMapping(value = "/views/selectDbUsers", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getDbUsers(String tablespaceName) throws Exception {
		Map<String, Object> resMap = new HashMap<String, Object>();

		List<String> userName = dbTableSpaceService.selectDbUsers(tablespaceName);

		resMap.put("dbUsers", userName);
		return resMap;

	}

	// @RequestMapping(value = "/selectObjList", method = RequestMethod.POST)
	// @ResponseBody
	// public Map<String, Object> getObjList(String objType, String userName) throws Exception {
	//
	// System.out.println("테스트 : " + objType + " // " + userName);
	//
	// HashMap<String, Object> resMap = new HashMap<String, Object>();
	// resMap.put("objType", objType);
	// resMap.put("userName", userName);
	//
	// List<DbColumns> objTypeList = dbTableSpaceService.selectObjList(resMap);
	//
	// System.out.println("개수 : " + objTypeList.size());
	//
	// resMap.put("objTypeList", objTypeList);
	//
	// return resMap;
	// }

	@RequestMapping(value = "/selectFileChart", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getFileChart() throws Exception {

		HashMap<String, Object> resMap = new HashMap<String, Object>();

		List<String> tablespaceList = dbTableSpaceService.selectDbTableSpace();

		List<DbTablespaceChartDomain> chartDomain = dbTableSpaceService.selectFileChart();

		resMap.put("dbTablespace", tablespaceList);
		resMap.put("chartDomain", chartDomain);

		return resMap;
	}

	@RequestMapping(value = "/selectObjList", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getObjList() throws Exception {

		HashMap<String, Object> resMap = new HashMap<String, Object>();

		List<String> tablespaceList = dbTableSpaceService.selectDbTableSpace();

		HashMap<String, List<DbColumns>> dbColumns = dbTableSpaceService.selectObjList(tablespaceList);

		resMap.put("dbTablespace", tablespaceList);
		resMap.put("dbColumns", dbColumns);

		return resMap;
	}

	// @RequestMapping(value = "/views/selectDbTablespace", method = RequestMethod.POST)
	// public ModelAndView getDbTableSpaceChart(String tablespaceName) throws Exception {
	// System.out.println("테스트");
	//
	// tablespaceName = tablespaceName.trim();
	//
	// List<String> tableSpaceList = dbTableSpaceService.selectDbTableSpace();
	//
	// DbTablespaceChartDomain tbsChart = dbTableSpaceService.selectDbTablespaceChart(tablespaceName);
	//
	// ModelAndView mav = new ModelAndView();
	//
	// List<String> userName = dbTableSpaceService.selectDbUsers(tablespaceName);
	//
	// mav.setViewName("/dbTablespace");
	// mav.addObject("tbsChart", tbsChart);
	// mav.addObject("dbTableSpace", tableSpaceList);
	// mav.addObject("dbUsers", userName);
	//
	// return mav;
	//
	// }

}
