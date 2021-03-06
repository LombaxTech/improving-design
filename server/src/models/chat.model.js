// chat-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "chat";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      chatId: { type: String, required: true, unique: true },
      members: [
        {
          type: mongooseClient.ObjectId,
          ref: "users",
        },
      ],
      messages: [
        {
          type: new Schema(
            {
              text: String,
              sender: { type: mongooseClient.ObjectId, ref: "users" },
            },
            { timestamps: true }
          ),
        },
      ],
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
