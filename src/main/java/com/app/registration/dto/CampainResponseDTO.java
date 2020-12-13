package com.app.registration.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

public class CampainResponseDTO {
  
  private Integer id;
  private String campaignName;
  @JsonFormat(pattern="yyyy-MM-dd")
  private String startDate;
  @JsonFormat(pattern="yyyy-MM-dd", shape=Shape.STRING)
  private String endDate;
  private String status;
  private String campainImage;
  
public String getCampaignImage() {
	return campainImage;
}

public void setCampainImage(String campainImage) {
	this.campainImage = campainImage;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getCampaignName() {
	return campaignName;
}
public void setCampainName(String campaignName) {
	this.campaignName = campaignName;
}

public String getStartDate() {
	return startDate;
}

public void setStartDate(String startDate) {
	this.startDate = startDate;
}

public String getEndDate() {
	return endDate;
}

public void setEndDate(String endDate) {
	this.endDate = endDate;
}

public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}

}
