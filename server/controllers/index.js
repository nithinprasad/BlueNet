const { Document, DocumentHistory, Data } = require("../models");

const createDocuments = async (req, res) => {
  try {
    const post = await Document.create(req.body);
    return res.status(201).json({
      post
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllDocuments = async (req, res) => {
  try {
    const document = await Document.findAll();
    return res.status(200).json({ document });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getByDocumentId = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findOne({
      where: { id },

      include: [
        {
          model: DocumentHistory,
          as: "revisions"
        }
      ]

    });
    if (document) {
      return res.status(200).json(document);
    }
    return res.status(404).send("document with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getByDocumentIdInternal = async (id) => {
  try {
    const document = await Document.findOne({
      where: { id },

      include: [
        {
          model: DocumentHistory,
          as: "revisions"
        }
      ]

    });
    if (document) {
      return document;
    }
    return undefined;
  } catch (error) {
    return undefined;;
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const [updated] = await Post.update(req.body, {
      where: { id: postId }
    });
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id: postId } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deleted = await Post.destroy({
      where: { id: postId }
    });
    if (deleted) {
      return res.status(204).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllRevisionsByDocumentId = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await DocumentHistory.findAll({
      where: { docId: id }
    });
    return res.status(200).json({ document });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createRevision = async (req, res) => {
  try {
    let request = req.body;
    request.docId = req.params.id;
    let dataId = await saveData(req.body.data);
    let revisons = await getByDocumentIdInternal(req.params.id);
    console.log(revisons.dataValues.revisions.length);

    if (dataId.message) {
      return res.status(500).json({ error: dataId.message });
    }
    request.data = dataId.dataValues.id;
    request.revisionid = revisons.dataValues.revisions.length + 1;
    const docHistory = await DocumentHistory.create(request);
    return res.status(201).json({
      docHistory
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRevisionById = async (req, res) => {
  try {
    const { id, revid } = req.params;
    const document = await DocumentHistory.findOne({
      where: { docId: id, revisionid: revid },

      include: [
        {
          model: Data,
          as: "diagram"
        }
      ]

    });
    if (document) {
      return res.status(200).json(document);
    }
    return res.status(404).send("document with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const saveData = async (req) => {

  try {
    const res = await Data.create({ data: req });
    return res;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createDocuments,
  getAllDocuments,
  getByDocumentId,
  updatePost,
  deletePost,
  getAllRevisionsByDocumentId,
  createRevision,
  saveData,
  getRevisionById
};
