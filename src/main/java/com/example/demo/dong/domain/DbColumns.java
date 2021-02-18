package com.example.demo.dong.domain;

import lombok.Data;

@Data
public class DbColumns {
	/*
	 * private String owner; private String tableName;
	 * 
	 * private String indexName; private String indexType; private String tableOwner; private String tableType; private
	 * String uniqueness; private String compression;
	 */

	private String tablespaceName;
	private String segmentType;
	private int objCnt;

}
