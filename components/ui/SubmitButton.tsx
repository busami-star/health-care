
import { Button } from "@/components/ui/button";

const submitButton = () => {
  return (
    <div>
      <Button
        type="submit"
        className="w-full py-3 bg-emerald-600 text-white rounded-xl 
                  font-semibold hover:bg-emerald-700 transition-colors 
                  transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Register Patient
      </Button>
    </div>
  );
};

export default submitButton;
