# Wit integration

This project is a basic integration of the open source Natural Language Processing tool **Wit.ai** .

There are 2 microservices in this project


    api --> The backend of the entire application.
            Exposes endpoints to be used by the web and mobile apps.

    app --> The web app frontend for the application.
            Allows a user to enter a text and get the response from the wit client.


## Files and Directories

The project (a.k.a. project directory) has a particular directory structure and it has to be maintained strictly, else `hasura` cli would not work as expected. A representative project is shown below:

```
.
├── hasura.yaml
├── clusters.yaml
├── conf
│   ├── authorized-keys.yaml
│   ├── auth.yaml
│   ├── ci.yaml
│   ├── domains.yaml
│   ├── filestore.yaml
│   ├── gateway.yaml
│   ├── http-directives.conf
│   ├── notify.yaml
│   ├── postgres.yaml
│   ├── routes.yaml
│   └── session-store.yaml
├── migrations
│   ├── 1504788327_create_table_userprofile.down.yaml
│   ├── 1504788327_create_table_userprofile.down.sql
│   ├── 1504788327_create_table_userprofile.up.yaml
│   └── 1504788327_create_table_userprofile.up.sql
└── microservices
    ├── app
    │   └── app
    |       ├ public /
    |       ├ src /
    |       ├ .gitignore
    |       ├ Readme.md
    |       ├ yarn.lock
    └── api
    |   ├── conf/
    |   ├── src/
    |   ├── k8s.yaml
    |   ├── Readme.md
    |   └── Dockerfile
    | .gitkeep
    | Readme.md
```

### `hasura.yaml`

This file contains some metadata about the project, namely a name, description and some keywords. Also contains `platformVersion` which says which Hasura platform version is compatible with this project.

### `clusters.yaml`

Info about the clusters added to this project can be found in this file. Each cluster is defined by it's name allotted by Hasura. While adding the cluster to the project you are prompted to give an alias, which is just hasura by default. The `kubeContext` mentions the name of kubernetes context used to access the cluster, which is also managed by hasura. The `config` key denotes the location of cluster's metadata on the cluster itself. This information is parsed and cluster's metadata is appended while conf is rendered. `data` key is for holding custom variables that you can define.

```yaml
- name: h34-ambitious93-stg
  alias: hasura
  kubeContext: h34-ambitious93-stg
  config:
    configmap: controller-conf
    namespace: hasura
  data: null  
```
