package com.example.demo.dong.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.dong.domain.DbUsersDomain;
import com.example.demo.dong.service.DbDDLService;

@Controller
@RequestMapping("/")
public class DbDDLController {
	@Autowired
	private DbDDLService dbDDLService;

	@RequestMapping(value = "/dbUsers", method = RequestMethod.GET)
	public ModelAndView getIndex() throws Exception {

		List<DbUsersDomain> dbUsers = dbDDLService.selectDbUsers();
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/dbUsers");
		mav.addObject("dbUsers", dbUsers);

		return mav;
	}

	@RequestMapping(value = "/views/selectDbUsers", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getDBUsers(Model model) throws Exception {

		Map<String, Object> resMap = new HashMap<String, Object>();

		List<DbUsersDomain> dbUsers = dbDDLService.selectDbUsers();

		resMap.put("dbUsers", dbUsers);

		return resMap;
	}

	@RequestMapping(value = "/selectDbUserObjType", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getDBUserObjType(String userName) throws Exception {

		Map<String, Object> resMap = new HashMap<String, Object>();

		List<String> dbUserObjType = dbDDLService.selectDbUserObjType(userName);

		resMap.put("dbUserObjType", dbUserObjType);

		return resMap;
	}

	@RequestMapping(value = "/selectObjTypeList", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getObjTypeList(String objType, String userName) throws Exception {

		System.out.println("테스트 : " + objType + "  //  " + userName);

		HashMap<String, Object> resMap = new HashMap<String, Object>();
		resMap.put("objType", objType);
		resMap.put("userName", userName);

		List<String> objTypeList = dbDDLService.selectObjTypeList(resMap);

		System.out.println("개수 : " + objTypeList.size());

		resMap.put("objTypeList", objTypeList);

		return resMap;
	}

	@RequestMapping(value = "/selectTableScript", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getObjDDL(String objType, String userName, String objTypeName) throws Exception {

		HashMap<String, Object> resMap = new HashMap<String, Object>();
		resMap.put("objType", objType);
		resMap.put("userName", userName);
		resMap.put("objTypeName", objTypeName);

		resMap = dbDDLService.selectAllScript(resMap);

		return resMap;
	}

	@RequestMapping(value = "/selectAllScript", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> selectAllScript(String userName) throws Exception {

		HashMap<String, Object> resMap = new HashMap<String, Object>();
		resMap.put("userName", userName);

		resMap = dbDDLService.selectAllScript(resMap);

		return resMap;
	}

}
