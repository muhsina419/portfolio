import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { motion } from "framer-motion";

export default function SkillCategoryCard({ category }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg p-6 border-2 border-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">{category.icon}</div>
            <div>
              <CardTitle className="text-xl text-purple-700">{category.title}</CardTitle>
              <CardDescription className="mt-1 text-gray-600">{category.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {category.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-white/30" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
