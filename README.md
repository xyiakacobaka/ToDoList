# **To-Do-List-App**

Demo ToDoListApp for skills demonstration  
**About project:** ToDo phone app with global states implementation (using Redux)

## **RUN GUIDE**

### Auto

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## **Technology stack**:

- Framework: Expo
- Build: EAS
- Utils: Redux, React SVG

<details><summary><span style="font-size: 20px;"><b>Structure</b></span></b></summary>
<ul>
- [README.md](./README.md)
- [App/](./app/)
  - [\_layout](./app/_layout.tsx)
  - [index.tsx](./app/index.tsx)
- [Assetes/](./assets/)

- [Fonts/](./assets/fonts/)

  - [SpaceMono-Regular.ttf](./assets/fonts/SpaceMono-Regular.ttf)

- [Img/](./assets/images/)

  - [adaptive-icon.png](./assets/images/adaptive-icon.png)
  - [favicon.png](assets/images/favicon.png)
  - [icon.png](assets/images/icon.png)
  - [partial-react-logo.png](assets/images/partial-react-logo.png)
  - [react-logo.png](assets/images/react-logo.png)
  - [react-logo@2x.png](assets/images/react-logo@2x.png)
  - [react-logo@3x.png](assets/images/react-logo@3x.png)
  - [splash-icon.png](assets/images/splash-icon.png)

- [Svg/](./assets/svg/)

  - [SVGAccept.tsx](assets/svg/SVGAccept.tsx)
  - [SVGDelete.tsx](assets/svg/SVGDelete.tsx)
  - [SVGPlus.tsx](assets/svg/SVGPlus.tsx)
  - [SVGReturn.tsx](assets/svg/SVGReturn.tsx)

- [Store/](store)
  - [Actions](store/Actions)
    - [TaskActions.tsx](store/Actions/TaskActions.tsx)
  - [Reducers](store/Reducers)
    - [TaskReducer.tsx](store/Reducers/TaskReducer.tsx)
  - [Selectors](store/Selectors)
    - [TaskSelectors.tsx](store/Selectors/TaskSelectors.tsx)
  - [store.tsx](store/store.tsx)
- [Types/](./types/)
  - [taskTypes](./types/taskTypes.tsx)
- [app.json](app.json)
</ul>
  </details>
