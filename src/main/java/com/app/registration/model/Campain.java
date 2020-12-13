package com.app.registration.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Campain {

 /* 

@Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;


  @Column(unique = true, nullable = false)
  private String campaignName;

  @Column(unique = true, nullable = false)
  private String duration;

  @Column(unique = false, nullable = false)
  private String status;

 // @Column(unique = false, nullable = true)
//  private String campainImage;
  

//public void setCampainImage(String campainImage) {
	//this.campainImage = campainImage;
//}
public Campain(){
	
}
public Campain(String campaignName, String duration,String status){
	this.campaignName=campaignName;
	this.duration=duration;
	this.status=status;
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

}*/
	@Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Integer id;


	  @Column(unique = true, nullable = false)
	  private String campaignName;

	  @Column(unique = false, nullable = false)
	  @JsonFormat(pattern="yyyy-MM-dd")
	  private String startDate;
	  
	  @Column(unique = false, nullable = false)
	  @JsonFormat(pattern="yyyy-MM-dd")
	  private String endDate;

	  @Column(unique = false, nullable = false)
	  private String status;

	 // @Column(unique = false, nullable = true)
	//  private String campainImage;
	  

	//public void setCampainImage(String campainImage) {
		//this.campainImage = campainImage;
	//}
	public Campain(){
		
	}
	public Campain(String campaignName, String startDate,String endDate,String status){
		this.campaignName=campaignName;
		this.startDate=startDate;
		this.endDate=endDate;
		this.status=status;
	}
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
	public String getCampaignName() {

		return campaignName;
	}
}
