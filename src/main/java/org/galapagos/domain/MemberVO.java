package org.galapagos.domain;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class MemberVO {
	private Long no;
	
	@NotBlank(message="사용자 ID는 필수 항목입니다.")
	@Size(min=5, message="사용자 ID는 5자 이상이어야 합니다.")
	private String username;
	
	@NotBlank(message="비밀번호는 필수 항목입니다.")
	private String password;
	
	@NotBlank(message="비밀번호 확인은 필수 항목입니다.")
	private String password2;
	
	@NotBlank(message="email은 필수 항목입니다.")
	@Email(message="email 양식에 맞지 않습니다.")
	private String email;
	
	private String birthYear;
	private String role;
	private List<String> hobbies;
	private String gender;
	private String intro;
	
	private boolean agreement;
}
