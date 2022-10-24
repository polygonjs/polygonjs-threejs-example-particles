#include <common>

// removed:
//// INSERT DEFINE



// /geo1/particlesSystemGpu2/attribute1
uniform sampler2D texture_instancePosition;





void main() {

	vec2 particleUV = (gl_FragCoord.xy / resolution.xy);

// removed:
//	// INSERT BODY



	// /geo1/particlesSystemGpu2/attribute1
	vec3 v_POLY_attribute1_val = texture2D( texture_instancePosition, particleUV ).xyz;
	gl_FragColor.xyz = v_POLY_attribute1_val;
	
	// /geo1/particlesSystemGpu2/add1
	vec3 v_POLY_add1_sum = (v_POLY_attribute1_val + vec3(0.0, 0.01, 0.0));
	
	// /geo1/particlesSystemGpu2/attribute2
	gl_FragColor.xyz = v_POLY_add1_sum;




}