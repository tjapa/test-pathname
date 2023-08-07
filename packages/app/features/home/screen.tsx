import { View, H1 } from 'dripsy'
import { usePathname } from 'solito/navigation'

export function HomeScreen() {
  const pathname = usePathname()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <H1 sx={{ fontWeight: '800' }}>Pathname: {pathname}</H1>
    </View>
  )
}
