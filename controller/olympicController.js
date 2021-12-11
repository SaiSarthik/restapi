import Mensrankingmodel from "../model/racemodel.js";

class olympicController {
  static createData = async (req, res) => {
    try {
      const mensrankings = await new Mensrankingmodel(req.body);
      console.log(req.body);
      const saveddata = await mensrankings.save();
      res.status(201).send(saveddata);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  static getData = async (req, res) => {
    try {
      const getmendata = await Mensrankingmodel.find({}).sort({"ranking":1});
      res.send(getmendata);
    } catch (error) {
      res.send(error);
    }
  };

  static getIndividialData = async (req, res) => {
    try {
        const rank = req.params.rank;
      const getmendata = await Mensrankingmodel.find({ranking: rank});
      res.send(getmendata);
    } catch (error) {
      res.send(error);
    }
  };

  static updateData = async (req, res) => {
    try {
        const rank = req.params.rank;
      const updateddata = await Mensrankingmodel.findOneAndUpdate({ranking: rank}, {data: req.body});
      res.send(updateddata);
      console.log(updateddata);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  static deleteData = async (req, res) => {
    try {
        const rank = req.params.rank;
      const deleteData = await Mensrankingmodel.findOneAndDelete({ranking: rank});
      res.send(deleteData);
      console.log(deleteData);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

export default olympicController;
