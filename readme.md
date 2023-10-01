# Real-time Speech Recognition System
![image](https://github.com/aloproducao/Live-captions-for-broadcast/assets/43450424/04b199d6-8a51-4656-ae53-54b159fcc9c6)

## Motivation

In the audiovisual industry, accessibility is a growing need. As a developer who works closely with the audiovisual production, I understand the critical importance of ensuring content is accessible to all audiences. This real-time speech recognition system emerges as a solution to facilitate low-cost accessibility, allowing live captions for broadcasts. It not only aids individuals with hearing impairments but also significantly expands your reach to non-native audiences by offering real-time translations in various languages.

## Features

- **Real-time Transcription**: Leveraging the browser's speech recognition API, it transcribes audio in real time, displaying live captions on your screen.
- **Customizable Interface**: Adjust text size, background color, and text color to suit your preferences and improve readability.
- **Language Flexibility**: Easily switch between multiple languages for transcription with just a simple modification in the URL.
- **Automatic Preferences Saving**: Your customized settings are automatically saved in the browser’s local storage, ensuring a consistent user experience even after a browser refresh or reopening the tool at a later time.

## How it Works

1. Open the HTML file in a supported browser (Google Chrome recommended).
2. Grant the necessary permissions when prompted to access your microphone.
3. Select a microphone from the available list.
4. Click the "Start" button to initiate the transcription process.
5. Speak clearly into the selected microphone, and watch the real-time captions appear on the screen.

# LiveCap Speech Recognition System Manual

### Interface
The system interface consists of a set of controls for customizing the visualization of transcriptions and a text field where transcriptions are displayed.

### Control Table
| Control                 | Description                                                                                                |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| Microphone Selection    | Allows the user to select the desired microphone from a list of available microphones.                     |
| Start                   | Starts the speech recognition service. Clicking again restarts the service.                               |
| Background Color        | Allows the user to change the interface background color.                                                  |
| Text Color              | Allows the user to change the transcribed text color.                                                     |
| Font Size               | Controls the font size of the transcribed text.                                                           |
| Output Width            | Controls the width of the area where the text is transcribed.                                             |
| Font Style              | Allows the user to choose from several font options for the transcribed text.                             |
| All Capital Letters     | If selected, transforms all letters of the transcribed text into uppercase.                               |
| Copy Text               | Copies the transcribed text to the clipboard.                                                            |
| Reset Preferences       | Resets all custom preferences to default values.                                                         |

### Transcription Area
In this area, the recognized text is displayed in real-time, and the user can copy it as needed.

### Use
1. **Microphone Selection**: Select the desired microphone.
2. **Start**: Click to start speech recognition.
3. **Customization**: Adjust the visualization preferences as desired.
4. **Copy Text**: After transcription, click "Copy Text" to copy the transcription.
5. **Reset Preferences**: To return settings to default values, click "Reset Preferences".

### User Preferences
User preferences, such as background color, text color, font size, output width, and font style, are saved locally. This means that when the user returns to the system, their preferences are retained.

### Accessibility
The system was developed with accessibility in mind, and various visualization preferences can be adjusted to meet individual user needs.

### Language Support and Language Codes
The system supports speech recognition in several languages, allowing its use by users of different nationalities.

## [Language Codes](https://navve.studio/legenda/index.html)
| Language  | Code | Example URL                                          |
|-----------|------|------------------------------------------------------|
| Portuguese| pt-BR| [Example](https://navve.studio/legenda/index.html?lang=pt-BR)|
| English   | en-US| [Example](https://navve.studio/legenda/index.html?lang=en-US)|
| Spanish   | es-ES| [Example](https://navve.studio/legenda/index.html?lang=es-ES)|
| French    | fr-FR| [Example](https://navve.studio/legenda/index.html?lang=fr-FR)|
| German    | de-DE| [Example](https://navve.studio/legenda/index.html?lang=de-DE)|
| Italian   | it-IT| [Example](https://navve.studio/legenda/index.html?lang=it-IT)|
| Russian   | ru-RU| [Example](https://navve.studio/legenda/index.html?lang=ru-RU)|
| Japanese  | ja-JP| [Example](https://navve.studio/legenda/index.html?lang=ja-JP)|

## How to Use a Virtual Audio
1. **Install a Virtual Cable Software**: Several options are available, such as VB-Cable and Virtual Audio Cable.
2. **Configure Virtual Audio**: After installation, set up virtual audio as the default output device in your system sound settings.
3. **Use Audio Broadcasting Software**: Software like Voicemeeter can be used to send audio from a specific application to virtual audio.
4. **Select Virtual Audio in the Speech Recognition System**: In the LiveCap system, select the virtual audio device as the microphone to be used.

## How to Integrate with OBS Studio for Lives
1. **Add a New Browser Source**: In OBS Studio, right-click under the "Sources" panel and select "Browser".
2. **Configure URL and Dimensions**: In the properties window that appears, enter the URL of the LiveCap system with the desired language code. Set the width and height as necessary.
3. **Adjust Audio Settings**: In "Settings" > "Audio", set the virtual audio device as one of the Microphones/Auxiliaries.
4. **Start Broadcasting**: After configuring everything, start live broadcasting in OBS Studio.

## Configure with OBS and Google Chrome

### Step 1: Installing VB-Cable
- Go to the [official VB-Cable website](https://vb-audio.com/Cable/) and download the software.
- Run the downloaded file and follow the on-screen instructions to install the software.
- After installation, you will have a new playback and recording device in your sound settings. This is your virtual cable.

### Step 2: Configuring OBS Studio and Google Chrome
- Open OBS Studio and go to the "Sources" panel.
- Right-click on this panel and select "Browser" to add a new browser source.
- A properties window will be opened. Enter the URL of the LiveCap system, adding the desired language code to the end of the URL. For example, for Portuguese, the URL would be: `https://navve.studio/legenda/index.html?lang=pt-BR`.
- Adjust the window dimensions as needed.
- Go to "Settings" > "Audio" and set the VB-Cable device as one of the "Mic/Aux".
- We recommend using the Google Chrome browser, as some browsers may not allow microphone access through OBS Studio.

### Step 3: Capturing the Browser Screen in OBS Studio
- With OBS Studio open and Google Chrome configured, go to "Sources".
- Add a new source by clicking on "+" and select "Window Capture".
- A new window will be opened, select the Google Chrome window that is displaying the LiveCap system.
- Adjust the size and position of the capture as needed.

### Step 4: Starting the Broadcast
- After setting up the virtual microphone, the browser source, and the screen capture, you are ready to start broadcasting.
- In OBS Studio, click on "Start Streaming" and enjoy real-time subtitles in your live broadcasts!
## Conclusion

This system is a simple yet effective avenue to enhance the accessibility of audiovisual content, reaching a broader audience seamlessly. We anticipate that this tool will be a valuable asset in meeting your audiovisual production requirements.

---

Developed with ❤️ by Miguel Kallemback  
[@aloproducao](https://github.com/aloproducao)  
📧 miguelkallemback.seven@gmail.com (for support)
