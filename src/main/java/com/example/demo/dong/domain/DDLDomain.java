package com.example.demo.dong.domain;

import lombok.Data;

@Data
public class DDLDomain {

	private String tableName;
	private String userName;
	private String sequenceName;
	private String constraintName;

	private String constraintType;
	private String procedureName;
	private String indexName;
	private String packageName;

	private String owner;
	private String ddl;
	private String objectName;
	private String columnName;
	private String dataType;
	private int dataLength;
	private int dataPrecision;
	private int dataScale;
	private String nullable;
	private int columnId;
	private String rOwner;
	private String rConstraintName;
	private int property;
	private String uniqueness;
	private String tablespaceName;
	private String columns;
	private String objectId;

}
