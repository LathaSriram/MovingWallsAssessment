package com.app.registration.dto;


import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

public class CampainDataDTO {
  
  /*private String campaignName;
  private String duration;
  private String status;
  private String campainImage;
  
public void setCampaignName(String campaignName) {
	this.campaignName = campaignName;
}
public String getDuration() {
	return duration;
}
public void setDuration(String duration) {
	this.duration = duration;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public String getCampainImage() {
	return campainImage;
}
public void setCampainImage(String campainImage) {
	this.campainImage = campainImage;
}
public String getCampaignName() {

	return campaignName;
}

}*/
	private String campaignName;
	  private String status;
	  private String campainImage;
	  @JsonFormat(pattern="yyyy-MM-dd")
	  private String startDate;
	  @JsonFormat(pattern="yyyy-MM-dd", shape=Shape.STRING)
	  private String endDate;
	  
	public void setCampaignName(String campaignName) {
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
	public String getCampainImage() {
		return campainImage;
	}
	public void setCampainImage(String campainImage) {
		this.campainImage = campainImage;
	}
	public String getCampaignName() {

		return campaignName;
	}
}