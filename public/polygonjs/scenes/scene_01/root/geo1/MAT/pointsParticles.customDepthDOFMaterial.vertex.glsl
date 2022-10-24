
uniform float size;
uniform float scale;
#include <common>

varying float vViewZDepth;

// INSERT DEFINES



// /geo1/MAT/pointsParticles/output1
uniform sampler2D texture_position;

// /geo1/MAT/pointsParticles/output1
varying vec2 particles_sim_uv_varying;

// /geo1/MAT/pointsParticles/output1
attribute vec2 particles_sim_uv_attrib;







void main() {

	// INSERT BODY



	// /geo1/MAT/pointsParticles/constant_point_size
	float v_POLY_constant_point_size_val = 0.01;
	
	// /geo1/MAT/pointsParticles/output1
	particles_sim_uv_varying = particles_sim_uv_attrib;
	vec3 transformed = texture2D( texture_position, particles_sim_uv_varying ).xyz;
	vec3 objectNormal = normal;
	#ifdef USE_TANGENT
		vec3 objectTangent = vec3( tangent.xyz );
	#endif
	gl_PointSize = v_POLY_constant_point_size_val * size * 10.0;





	#include <project_vertex>

	vViewZDepth = - mvPosition.z;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif

}
