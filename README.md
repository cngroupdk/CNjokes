# CN JOKES
Implementation of react app that consumes public API (CNU training)

[API to consume](https://api.chucknorris.io/)

## TARGET

* App will display random CN joke
* App can display any number of jokes (count determined by user)
* App will display all available categories of jokes
  * When clicked on category, random joke from this category will be displayed
  * User can input number of jokes he wants to see in current category, then jokes are displayed
* App will have input for fultext search of jokes, displaying first 25 jokes returned from API on every key stroke
* Surprise me :)

## TEAM PROJECT INFO
### STARTING A GIT PROJECT

Clone the repository to your PC.
  ```git clone git@github.com:cngroupdk/CNjokes.git```

Create a `react-master` branch as a master branch for our cooperation in React.
  ```git branch "react-master"```

Switch to the branch.
  ```git checkout react-master```

### CREATE REACT APP

Make sure you have installed [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) on your PC.

Set up the environment.
  ```
  yarn create react-app jokes-app
  cd jokes-app
  yarn start
  ```

### TECHNOLOGIES USED

* Yarn
* ReactJS
* CSS

### GIT PROJECT SYSTEM
#### BASICS
List all local branches in the current repository.
```git branch```

Switch to the specified branch and updates the working directory.
```git checkout "react-master"```

#### CHANGES TO COMMIT
List all new or modified files to be commited.
```git status```

Snapshot the file in preparation for versioning.
```git add [file]```

Record file snapshots permanently in version history.
```git commit -m "descriptive message"```

Upload all local branch commits to GitHub.
```git push```

#### COMMIT MESSAGE RULES
Write a commit message using this pattern to keep the one’s activity easier to understand.
```"feat(feature-name): changes made"```

Example 1:
```"feat(menu): hamburger menu added, opens and closes, references not working yet"```

Example 2:
```"feat(ref): refactoring the menu component"```


#### SYNCHRONIZE CHANGES
Download all history from the repository bookmark.
```git fetch [bookmark]```

Download bookmark history and incorporates changes.
```git pull```

Combine the specified branch’s history into the current branch.
```git merge [branch]```

### TEAM WORK
* Every team member works in his/her own branch (`react-adam` or `react-verca`) and merges his/her local changes there.
* After a member has some feature done, he/she informs the rest of the team about it. The other member should have a look at it. If everything is ok, team members agree on merging the changes (pulling them) into a master branch (`react-master`).
* A team member fetches the actual version from the `react-master` branch to his own branch.