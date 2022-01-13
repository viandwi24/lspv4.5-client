export type IStateTheme = 'light' | 'dark' | 'system';

export default function (init: boolean = false) {
	const theme = useState('theme', () => 'light' as IStateTheme);

  const getSystemTheme = () => {
    return ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light') as IStateTheme;
  }

  const getUserSetting = () => {
    return (localStorage.getItem('theme') ? localStorage.getItem('theme') : getSystemTheme()) as IStateTheme;
  }

  const getThemeSetting = () => {
    theme.value = getUserSetting();
  }

  // layout
  const bodyClasses = ['antialiased', 'text-gray-800', 'dark:text-gray-200', 'bg-white', 'dark:bg-gray-900']
  const applyLayout = () => {
    const body = document.body
    document.body.classList.add(...bodyClasses)
  }
  const destroyLayout = () => {
    // const body = document.body
    // document.body.classList.remove(...bodyClasses)
  }

  // 
  const changeTheme = (newTheme: IStateTheme) => {
    const html = document.body.parentElement
    localStorage.setItem('theme', newTheme)
    if (newTheme === 'system') {
      newTheme = getSystemTheme()
    }
    if (newTheme === 'light') {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
  }

  const onThemeSystemChange = function (e) {
    if (theme.value === 'system') {
      changeTheme(getSystemTheme())
    }
  }

  watch(theme, (newTheme) => changeTheme(newTheme));

  if (init) {
    onBeforeMount(() => {
      applyLayout()
      getThemeSetting()
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onThemeSystemChange)
    })
    onUnmounted(() => {
      destroyLayout()
    })
  }

  return {
    theme,
    getSystemTheme,
    getUserSetting,
    getThemeSetting,
    changeTheme,
  }
}
