package com.example.demo.dong.service;

import java.util.HashMap;
import java.util.List;

import com.example.demo.dong.domain.DbUsersDomain;

public interface DbDDLService {
	public List<DbUsersDomain> selectDbUsers() throws Exception;

	public List<String> selectDbUserObjType(String userName) throws Exception;

	public List<String> selectObjTypeList(HashMap<String, Object> resMap) throws Exception;

	public String selectObjDDL(HashMap<String, Object> resMap) throws Exception;

	public HashMap<String, Object> selectAllScript(HashMap<String, Object> resMap) throws Exception;
}
