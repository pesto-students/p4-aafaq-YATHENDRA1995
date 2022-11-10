import express from 'express'

import users from '../models/userModel';
import finances from '../models/financeModel';

const financeRouter = express.Router()

financeRouter
  // Get all finances of a particular user
  .get('/:id', async (req, res) => {
    const id = req?.params?.id
    if (id) {
      const allFinanceData = await finances.find({ user: id })
      if (allFinanceData?.length > 0) {
        return res.status(200).json({
          financeData: allFinanceData
        })
      }
      return res.status(404).json({ message: 'No Data found for current user' })
    }
    return res.status(400).json({ message: 'UnAuthorized' })
  })
  // Insert finance of a particular user
  .post('/', async (req, res) => {
    const { user } = req?.body
    if (!user) {
      return res.status(400).json({ message: 'Please login to insert data' })
    }
    const allUsers = await users.find()
    const userIds = allUsers.map(user => user?.id)
    if (userIds?.includes(user)) {
      const insertedFinaceDoc = await finances.create({ ...req?.body })
      return res.status(201).json(insertedFinaceDoc)
    } else {
      return res.status(400).json({ message: 'User Not Found' })
    }
  })
  // Update finances of a particular user
  .post('/update/:id', async (req, res) => {
    const { user } = req?.body
    if (!user) {
      return res.status(400).json({ message: 'Please login to insert data' })
    }
    const allUsers = await users.find()
    const userIds = allUsers.map(user => user?.id)
    if (userIds?.includes(user)) {
      const id = req?.params?.id
      const updateFinaceDoc = await finances.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      return res.status(201).json(updateFinaceDoc)
    } else {
      return res.status(400).json({ message: 'User Not Found' })
    }
  })
  // Delete finances of a particular user
  .delete('/delete/:id', async (req, res) => {
    const { user } = req?.body
    if (!user) {
      return res.status(400).json({ message: 'Please login to insert data' })
    }
    const allUsers = await users.find()
    const userIds = allUsers.map(user => user?.id)
    if (userIds?.includes(user)) {
      const deleteDoc = await finances.deleteOne({ _id: req?.params?.id })
      return res.status(201).json(deleteDoc)
    } else {
      return res.status(400).json({ message: 'User Not Found' })
    }
  })
  // Get finances by year or month
  // .post('/:id', async (req, res) => {
  //   const id = req?.params?.id
  //   const { year, month } = req?.body
  //   if (id) {
  //     const allFinanceData = await finances.find({ user: id })
  //     if (allFinanceData?.length > 0) {
  //       const reqInfoIncome = allFinanceData?.filter(item => item?.income?.filter(data => data?.year !== year))
  //       return res.status(200).json({
  //         financeData: reqInfoIncome
  //       })
  //     }
  //     return res.status(404).json({ message: 'No Data found for current user' })
  //   }
  //   return res.status(400).json({ message: 'UnAuthorized' })
  // })

export { financeRouter }