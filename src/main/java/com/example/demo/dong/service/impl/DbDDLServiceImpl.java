package com.example.demo.dong.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dong.domain.DDLDomain;
import com.example.demo.dong.domain.DbUsersDomain;
import com.example.demo.dong.service.DbDDLService;

@Service
public class DbDDLServiceImpl implements DbDDLService {
	@Autowired
	public SqlSession sql;

	@Override
	public List<DbUsersDomain> selectDbUsers() throws Exception {
		return sql.selectList("DbDDLMapper.selectDbUsers");
	}

	@Override
	public List<String> selectDbUserObjType(String userName) throws Exception {
		return sql.selectList("DbDDLMapper.selectDbUserObjType", userName);
	}

	@Override
	public List<String> selectObjTypeList(HashMap<String, Object> resMap) throws Exception {
		return sql.selectList("DbDDLMapper.selectObjTypeList", resMap);
	}

	@Override
	public String selectObjDDL(HashMap<String, Object> resMap) throws Exception {
		return sql.selectOne("DbDDLMapper.selectObjDDL", resMap);
	}

	@Override
	public HashMap<String, Object> selectAllScript(HashMap<String, Object> resMap) throws Exception {

		// List<String> objTypeList = sql.selectList("selectDbUserObjType", resMap.get("userName"));
		List<DDLDomain> tableList = new ArrayList<DDLDomain>();
		List<DDLDomain> indexList = new ArrayList<DDLDomain>();
		List<DDLDomain> sequenceList = new ArrayList<DDLDomain>();

		List<DDLDomain> packageList = new ArrayList<DDLDomain>();
		List<DDLDomain> constraintTypeList = new ArrayList<DDLDomain>();
		List<DDLDomain> packageNameList = new ArrayList<DDLDomain>();

		List<DDLDomain> columnList = new ArrayList<DDLDomain>();
		List<DDLDomain> indexIdList = new ArrayList<DDLDomain>();
		List<DDLDomain> constraintList = new ArrayList<DDLDomain>();
		List<DDLDomain> constraintTmpList = new ArrayList<DDLDomain>();
		columnList = sql.selectList("selectTableScript", resMap);

		resMap.put("columns", columnList);

		constraintTmpList = sql.selectList("selectConstraintScript", resMap);

		for (int i = 0; i < constraintTmpList.size(); i++) {
			resMap.put("constraintName", constraintTmpList.get(i).getConstraintName());

			constraintList.add(constraintTmpList.get(i));

		}

		indexList = sql.selectList("selectIndexCheck", resMap);

		for (DDLDomain i : indexList) {
			System.out.println("테스트 : " + i);

		}
		indexList = indexList.stream().filter(ddlDomain -> ddlDomain.getIndexName().equals("EMP")).collect(Collectors.toList());

		System.out.println("하하 : " + indexList.stream().filter(ddlDomain -> ddlDomain.getIndexName().equals("EMP")).collect(Collectors.toList()));
		System.out.println("개수 : " + indexList.size());

		for (DDLDomain i : indexList) {
			System.out.println("테스트2 : " + i);

		}
		resMap.put("constraint", constraintList);
		resMap.put("index", indexList);

		return resMap;

	}
}
