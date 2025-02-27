define({ "api": [
  {
    "type": "get",
    "url": "/v1/login?email=email&password=password",
    "title": "Login",
    "group": "Application",
    "description": "<p>Authentification de l'usager et récupération du token d'authentification</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>courriel de l'usager.  Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "authentification",
            "description": "<p>token à mettre dans le header pour faire les autres requêtes.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Application",
    "name": "GetV1LoginEmailEmailPasswordPassword"
  },
  {
    "type": "get",
    "url": "/v2/login?email=email&password=password",
    "title": "Login",
    "group": "Application",
    "description": "<p>Authentification de l'usager et récupération du token d'authentification</p>",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>courriel de l'usager.  Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>non vérifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token à inclure dans le header des requêtes subséquentes</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Information sur l'usager courant { id: 3, first_name: 'firstname3', last_name: 'last_name3', email: 'teacher+3@gmail.com', password: '' }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouterV2.ts",
    "groupTitle": "Application",
    "name": "GetV2LoginEmailEmailPasswordPassword"
  },
  {
    "type": "get",
    "url": "/v1/course/:course/notes",
    "title": "Notes des étudiants",
    "group": "Enseignant",
    "description": "<p>Récupération de toutes les notes des étudiants d'un cours</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token dans le header.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": ":course",
            "description": "<p>id du cours .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>[ { course: '2', type: 'questionnaire', type_id: '5', note: '66.66', student: '3' },]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Enseignant",
    "name": "GetV1CourseCourseNotes"
  },
  {
    "type": "get",
    "url": "/v1/course/:course/students",
    "title": "Étudiants inscrit à un cours",
    "group": "Enseignant",
    "description": "<p>Récupération de tous les étudiants inscrit a un cours</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token d'authentification de l'enseignant dans le header.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": ":course",
            "description": "<p>id du cours .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: 2, first_name: 'firstname2', last_name: 'last_name2', email: 'student+2@gmail.com', permanent_code: 'lastf2' },]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Enseignant",
    "name": "GetV1CourseCourseStudents"
  },
  {
    "type": "get",
    "url": "/v1/courses",
    "title": "Cours de l'enseignant",
    "group": "Enseignant",
    "description": "<p>Récupération de tous les cours enseigner par un enseignant</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token dans le header.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: 3, sigle: 'LOG210', nb_max_student: 5, groupe: '03', titre: 'Analyse et conception de logiciels', date_debut: '2019-09-03', date_fin: '2019-11-03' }, ...]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Enseignant",
    "name": "GetV1Courses"
  },
  {
    "type": "post",
    "url": "/v1/note?student_id=student_id&course_id=course_id&type=type&type_id=type_id&note=note",
    "title": "Enseignant ajouter une note à un étudiant",
    "group": "Enseignant",
    "description": "<p>L'enseignant ajoute une note dans le dossier de l'étudiant</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_id",
            "description": "<p>id de l'étudiant.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "course_id",
            "description": "<p>id du cours.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>devoir ou Questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type_id",
            "description": "<p>id du devoir ou du questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "note",
            "description": "<p>note de l'étudiant à enregistrer.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Enseignant",
    "name": "PostV1NoteStudent_idStudent_idCourse_idCourse_idTypeTypeType_idType_idNoteNote"
  },
  {
    "type": "get",
    "url": "/v1/student/courses",
    "title": "Cours de l'étudiant",
    "group": "Etudiant",
    "description": "<p>Récupération de tout les cours d'un étudiant</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token dans le header.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: 5, sigle: 'LOG430', nb_max_student: 5, groupe: '01', titre: 'Architecture logicielle', date_debut: '2019-09-03', date_fin: '2019-09-03' }, ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Etudiant",
    "name": "GetV1StudentCourses"
  },
  {
    "type": "get",
    "url": "/v1/student/note?course=course&type=type&type_id=type_id&note=note",
    "title": "Ajouter note étudiant",
    "group": "Etudiant",
    "description": "<p>Ajout d'une note dans le dossier de l'étudiant</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "course",
            "description": "<p>id du cours.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>devoir ou Questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type_id",
            "description": "<p>id du devoir ou du questionnaire</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "note",
            "description": "<p>note de l'étudiant à enregistrer.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Etudiant",
    "name": "GetV1StudentNoteCourseCourseTypeTypeType_idType_idNoteNote"
  },
  {
    "type": "get",
    "url": "/v1/student/notes",
    "title": "Notes de l'étudiant",
    "group": "Etudiant",
    "description": "<p>Récupération de toutes les notes d'un étudiant</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token dans le header.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>[ { course: '1', type: 'devoir', type_id: '2', note: '33.33' },]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Etudiant",
    "name": "GetV1StudentNotes"
  },
  {
    "type": "get",
    "url": "/v1/latency?value=latence",
    "title": "Latence",
    "description": "<p>Ajuster la latence pour modifier la performance du serveur SGB.</p>",
    "name": "GetUser",
    "group": "Test",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latence",
            "description": "<p>valeur de la latence en secondes..</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Test"
  },
  {
    "type": "get",
    "url": "/v1/notes/clear",
    "title": "Annuler la latence",
    "group": "Test",
    "description": "<p>Effacter toutes les notes dans le serveur SGB.  Pour vous faciliter la tâche et ne pas avoir à redémarrer le serveur à chaque fois qu'on veut nettoyer les données.  Peut aussi être très utile pour la réalisation des tests automatisées.</p>",
    "version": "1.0.0",
    "filename": "src/routes/SgbRouter.ts",
    "groupTitle": "Test",
    "name": "GetV1NotesClear"
  }
] });
