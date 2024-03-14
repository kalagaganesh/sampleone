import {Component} from 'react'

import './App.css'

import TagButton from './components/TagButton'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    taskInput: '',
    tagInput: tagsList[0].displayText,
    tasksList: [],
    activeTabId: false,
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTagInput = event => {
    this.setState({tagInput: event.target.value})
  }

  onAddTaskBtn = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    const eachObj = {
      taskName: taskInput,
      tagName: tagInput,
      isTabClicked: false,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, eachObj],
      taskInput: '',
    }))
  }

  onClickTagBtn = displayText => {
    this.setState(prevState => ({
      tasksList: prevState.tasksList.map(eachItem => {
        if (eachItem.tagName === displayText) {
          return {...eachItem, isTabClicked: !prevState.isTabClicked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {taskInput, tagInput, tasksList, activeTabId} = this.state
    console.log(tasksList)
    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="headingTask">Create a task!</h1>
          <form onSubmit={this.onAddTaskBtn}>
            <div className="task-container">
              <label className="taskTxt" htmlFor="task">
                Task
              </label>
              <input
                placeholder="Enter the task here"
                className="inputEle"
                id="task"
                onChange={this.onChangeTaskInput}
                value={taskInput}
              />
            </div>
            <div className="tags-container">
              <label className="taskTxt" htmlFor="Tags">
                Tags
              </label>
              <select
                className="inputEle"
                id="Tags"
                onChange={this.onChangeTagInput}
                value={tagInput}
              >
                {tagsList.map(eachItem => (
                  <option key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="AddTaskBtnContainer">
              <button className="AddTaskBtn" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="right-container">
          <h1 className="tagsHeading">Tags</h1>
          <ul className="btnContainer">
            {tagsList.map(eachItem => (
              <TagButton
                key={eachItem.optionId}
                tagDetails={eachItem}
                onClickTagBtn={this.onClickTagBtn}
                isActive={eachItem.isTabClicked}
                tasksList={tasksList}
              />
            ))}
          </ul>
          <h1 className="tagsHeading">Tasks</h1>
          {tasksList.length > 0 ? (
            <ul>
              {tasksList.map(eachItem => (
                <li className="eachTaskItem">
                  <p className="eachTaskName">{eachItem.taskName}</p>
                  <p className="eachTagName">{eachItem.tagName}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="noTaskContainer">
              <p className="tagsHeading">No Tasks Added Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
