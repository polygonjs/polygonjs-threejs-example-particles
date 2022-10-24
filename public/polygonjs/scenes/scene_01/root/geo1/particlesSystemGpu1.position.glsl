#include <common>

// removed:
//// INSERT DEFINE



// /geo1/particlesSystemGpu1/globals1
uniform sampler2D texture_position;





void main() {

	vec2 particleUV = (gl_FragCoord.xy / resolution.xy);

// removed:
//	// INSERT BODY



	// /geo1/particlesSystemGpu1/globals1
	vec3 v_POLY_globals1_position = texture2D( texture_position, particleUV ).xyz;
	
	// /geo1/particlesSystemGpu1/add1
	vec3 v_POLY_add1_sum = (v_POLY_globals1_position + vec3(0.0, 0.01, 0.0));
	
	// /geo1/particlesSystemGpu1/output1
	gl_FragColor.xyz = v_POLY_add1_sum;




}