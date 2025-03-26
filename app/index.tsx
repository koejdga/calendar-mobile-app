import DayEventsList from "@/components/DayEventsList";
import TimeUnitNameDisplay from "@/components/TimeUnitNameDisplay";
import { Colors } from "@/contants/Colors";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        height: 20,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <TimeUnitNameDisplay
        style={{ marginTop: 20 }}
        monthName="Травень 7(вт)"
      />
      <DayEventsList style={{ marginTop: 20 }} />
    </View>
  );
}
