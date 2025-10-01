import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface EnrollDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCourse?: string;
}

export default function EnrollDialog({ open, onOpenChange, selectedCourse }: EnrollDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: selectedCourse || "",
    startDate: "",
    note: "",
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Please accept the terms",
        description: "You must agree to the terms and privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Enrollment submitted:", formData);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enrollment submitted!",
      description: "We'll contact you within 24 hours to finalize your enrollment.",
    });
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      startDate: "",
      note: "",
      agreeTerms: false,
    });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="dialog-enroll">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Enrol in JobJam</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get in touch within 24 hours to finalize your enrollment
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name *</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              data-testid="input-fullname"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              data-testid="input-enroll-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              data-testid="input-phone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Preferred course *</Label>
            <Select
              value={formData.course}
              onValueChange={(value) => setFormData(prev => ({ ...prev, course: value }))}
              required
            >
              <SelectTrigger data-testid="select-course">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-Hour Intro">2-Hour Intro ($300)</SelectItem>
                <SelectItem value="12-Month Support Plan">12-Month Support Plan ($3,000)</SelectItem>
                <SelectItem value="6-Month Fast Path">6-Month Fast Path ($6,000)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Preferred start date (optional)</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              data-testid="input-startdate"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">Additional information (optional)</Label>
            <Textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your job search goals..."
              data-testid="input-note"
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="agreeTerms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) =>
                setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
              }
              data-testid="checkbox-terms"
            />
            <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
              I agree to the{" "}
              <a href="#privacy" className="text-ring hover:underline">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="#privacy" className="text-ring hover:underline">
                privacy policy
              </a>
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              data-testid="button-cancel-enroll"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
              data-testid="button-submit-enroll"
            >
              {isSubmitting ? "Submitting..." : "Submit enrollment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
