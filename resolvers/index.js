const Blog = require("../models/blog");
const Project = require("../models/project");

module.exports = {
  blogs: () => {
    return Blog.find()
      .then(blogs => {
        return blogs.map(blog => {
          const convertedDateString = `${blog.created.getMonth() +
            1}/${blog.created.getDate()}/${blog.created.getFullYear()}`;
          return { ...blog._doc, _id: blog.id, created: convertedDateString };
        });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  createBlog: args => {
    const blog = new Blog({
      photo: args.blogInput.photo,
      title: args.blogInput.title,
      description: args.blogInput.description,
      created: new Date(args.blogInput.created)
    });
    return blog
      .save()
      .then(result => {
        console.log(result);
        return { ...result._doc, _id: result.id };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  projects: () => {
    return Project.find()
      .then(projects => {
        return projects.map(project => {
          const convertedDateString = `${project.created.getMonth() +
            1}/${project.created.getDate() +
            1}/${project.created.getFullYear()}`;

          return {
            ...project._doc,
            _id: project.id,
            created: convertedDateString
          };
        });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  createProject: args => {
    const project = new Project({
      title: args.projectInput.title,
      url: args.projectInput.url,
      description: args.projectInput.description,
      created: new Date(args.projectInput.created),
      codeLocation: args.projectInput.codeLocation,
      sitePreview: args.projectInput.sitePreview,
      fullScreenPhoto: args.projectInput.fullScreenPhoto
    });
    return project
      .save()
      .then(result => {
        console.log(result);
        return { ...result._doc, _id: result.id };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  deleteBlog: args => {
    return Blog.deleteOne({ _id: args.blogId })
      .then(() => {
        return Blog.find()
          .then(blogs => {
            return blogs.map(blog => {
              return { ...blog._doc, _id: blog.id };
            });
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  deleteProjects: args => {
    return Project.deleteOne({ _id: args.projectId })
      .then(() => {
        return Project.find()
          .then(projects => {
            return projects.map(project => {
              return { ...project._doc, _id: project.id };
            });
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
