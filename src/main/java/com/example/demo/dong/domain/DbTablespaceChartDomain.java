package com.example.demo.dong.domain;

import lombok.Data;

@Data
public class DbTablespaceChartDomain {

	private String tablespaceName;
	private int maxBytes;
	private int bytes;
	private int userBytes;
	private String freePer;
	private String userPer;
	private String userPerTot;
	private String bytesPerTot;
}
