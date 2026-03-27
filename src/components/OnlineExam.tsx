import React, { useState, useEffect } from 'react';
import { useAllExams, useExamResults, useGamification, useCustomQuestions } from '../store';
import { Exam, Question, ExamResult, GradeLevel } from '../types';
import { DEMO_QUESTIONS } from '../data/demo';
import { ArrowLeft, Clock, CheckCircle2, XCircle, FileText, Calendar, Trophy, Zap, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import Swal from 'sweetalert2';

interface Props {
  onBack: () => void;
}

export function OnlineExam({ onBack }: Props) {
  const { allExams } = useAllExams();
  const [examResults, setExamResults] = useExamResults();
  const [customQuestions] = useCustomQuestions();
  
  const [view, setView] = useState<'list' | 'detail' | 'taking' | 'result'>('list');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(null);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentResult, setCurrentResult] = useState<ExamResult | null>(null);

  const allQuestions = [...DEMO_QUESTIONS, ...customQuestions];

  // List View
  if (view === 'list') {
    return (
      <div className="p-6 lg:p-8 max-w-5xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-indigo-500" />
              Kiểm tra online
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Làm bài kiểm tra và thi thử các môn học</p>
          </div>
        </div>

        {/* Grade Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none snap-x">
          <button
            onClick={() => setSelectedGrade(null)}
            className={cn(
              "px-5 py-2.5 rounded-xl whitespace-nowrap font-bold transition-all snap-start shadow-sm",
              selectedGrade === null
                ? "bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
            )}
          >
            Tất cả khối lớp
          </button>
          {Array.from({ length: 12 }, (_, i) => (i + 1) as GradeLevel).map(grade => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={cn(
                "px-5 py-2.5 rounded-xl whitespace-nowrap font-bold transition-all snap-start flex gap-2 items-center shadow-sm",
                selectedGrade === grade
                  ? "bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
              )}
            >
              Lớp {grade}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allExams
            .filter(exam => selectedGrade === null || exam.grade === selectedGrade)
            .map(exam => {
            const result = examResults.find(r => r.examId === exam.id);
            const isCompleted = !!result;
            
            return (
              <div 
                key={exam.id}
                className={cn(
                  "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border p-6 flex flex-col transition-all hover:shadow-md",
                  isCompleted ? "border-emerald-200 dark:border-emerald-800/50" : "border-slate-200 dark:border-slate-700"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">
                    Lớp {exam.grade}
                  </span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành ({result.score}đ)
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1 line-clamp-2">
                  {exam.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {Math.floor(exam.duration / 60)} phút
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4 text-slate-400" />
                    {exam.questionIds.length} câu
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedExam(exam);
                    setView('detail');
                  }}
                  className={cn(
                    "w-full py-2.5 rounded-xl font-bold transition-all",
                    isCompleted 
                      ? "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                      : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20"
                  )}
                >
                  {isCompleted ? 'Xem lại kết quả' : 'Vào thi'}
                </button>
              </div>
            );
          })}
          
          {allExams.filter(exam => selectedGrade === null || exam.grade === selectedGrade).length === 0 && (
             <div className="col-span-full p-12 text-center text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl">
               Chưa có đề thi nào cho khối lớp này.
             </div>
          )}
        </div>
      </div>
    );
  }

  // Detail View
  if (view === 'detail' && selectedExam) {
    const result = examResults.find(r => r.examId === selectedExam.id);
    
    return (
      <div className="p-6 lg:p-8 max-w-3xl mx-auto animate-fade-in space-y-6">
        <button onClick={() => setView('list')} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5" /> Quay lại danh sách
        </button>
        
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center">
          <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{selectedExam.title}</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">{selectedExam.description}</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-2xl text-center">
              <Clock className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-500">Thời gian</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{Math.floor(selectedExam.duration / 60)} phút</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-2xl text-center">
              <FileText className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-500">Số câu hỏi</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{selectedExam.questionIds.length}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-2xl text-center">
              <Calendar className="w-6 h-6 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-500">Lớp</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">{selectedExam.grade}</p>
            </div>
          </div>
          
          {result ? (
            <div className="space-y-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-emerald-900 dark:text-emerald-400">Đã hoàn thành</p>
                    <p className="text-xs text-emerald-700/80 dark:text-emerald-500/80">{new Date(result.date).toLocaleDateString('vi-VN')}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-emerald-600">{result.score}đ</p>
                  <p className="text-xs font-medium text-emerald-700/80 dark:text-emerald-500/80">Hoàn thành tốt</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    setCurrentResult(result);
                    setView('result');
                  }}
                  className="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Xem chi tiết kết quả
                </button>
                <button 
                  onClick={() => setView('taking')}
                  className="flex-1 py-3.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-colors"
                >
                  Thi lại
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 p-4 rounded-xl text-left flex items-start gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-400">Lưu ý: Bạn không thể tạm dừng hay thoát bài khi đang làm. Hệ thống sẽ tự nộp bài khi hết giờ.</p>
            </div>
          )}
          
          {!result && (
            <button 
              onClick={() => setView('taking')}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-200 dark:shadow-none hover:opacity-90 transition-opacity"
            >
              Bắt đầu làm bài
            </button>
          )}
        </div>
      </div>
    );
  }

  // Taking View
  if (view === 'taking' && selectedExam) {
    const questions = selectedExam.questionIds
      .map(id => allQuestions.find(q => q.id === id))
      .filter((q): q is Question => q !== undefined);
      
    if (questions.length === 0) {
      return (
        <div className="p-8 text-center text-slate-500">
          Lỗi: Không tìm thấy câu hỏi cho đề thi này.
          <button onClick={() => setView('detail')} className="mt-4 block mx-auto text-indigo-600 underline">Quay lại</button>
        </div>
      );
    }
    
    return <ExamTaking 
      exam={selectedExam} 
      questions={questions} 
      onFinish={(result) => {
        setExamResults(prev => {
          // Remove old result if exists
          const filtered = prev.filter(r => r.examId !== result.examId);
          return [result, ...filtered];
        });
        setCurrentResult(result);
        setView('result');
      }} 
      onCancel={() => setView('detail')} 
    />;
  }

  // Result View
  if (view === 'result' && selectedExam && currentResult) {
    const questions = selectedExam.questionIds
      .map(id => allQuestions.find(q => q.id === id))
      .filter((q): q is Question => q !== undefined);
      
    return <ExamResultView result={currentResult} exam={selectedExam} questions={questions} onBack={() => setView('list')} />;
  }

  return null;
}

// === EXAM TAKING COMPONENT ===
function ExamTaking({ exam, questions, onFinish, onCancel }: { 
  exam: Exam; 
  questions: Question[]; 
  onFinish: (r: ExamResult) => void; 
  onCancel: () => void; 
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(exam.duration);
  const [gamification, setGamification] = useGamification();

  useEffect(() => {
    if (timeLeft <= 0) {
      submitExam();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const mcQs = questions.filter(q => q.type === 'multiple_choice' || !q.type);
  const tfQs = questions.filter(q => q.type === 'true_false_cluster');
  const esQs = questions.filter(q => q.type === 'essay');

  const submitExam = () => {
    let totalScore = 0;
    
    // MC: 0.25 each
    mcQs.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        totalScore += 0.25;
      }
    });

    // TF: 0.25 each statement
    tfQs.forEach(q => {
      const uAnsStr = answers[q.id];
      if (uAnsStr) {
        try {
          const uAns = JSON.parse(uAnsStr);
          q.trueFalseStatements?.forEach(stmt => {
            if (uAns[stmt.id] === stmt.isTrue) {
              totalScore += 0.25;
            }
          });
        } catch(e) {}
      }
    });

    // Essay: 1.0 each based on keywords
    esQs.forEach(q => {
      const text = (answers[q.id] || '').toLowerCase();
      if (text.length > 5 && q.keywords && q.keywords.length > 0) {
        let matched = 0;
        q.keywords.forEach(k => {
          if (text.includes(k.toLowerCase())) matched++;
        });
        const ratio = matched / q.keywords.length;
        // Grade dynamically up to 1.0 pt
        // If matched >= 80%, full point. Otherwise proportional
        let essayScore = ratio >= 0.8 ? 1.0 : parseFloat(ratio.toFixed(2));
        totalScore += essayScore;
      }
    });
    
    totalScore = parseFloat(Math.min(10, totalScore).toFixed(2));
    const xpEarned = Math.round(totalScore * 10);
    
    setGamification({
      ...gamification,
      xp: gamification.xp + xpEarned,
      level: Math.floor((gamification.xp + xpEarned) / 100) + 1,
      totalAnswered: gamification.totalAnswered + questions.length,
    });
    
    const result: ExamResult = {
      id: `res_${Date.now()}`,
      examId: exam.id,
      score: totalScore,
      totalQuestions: questions.length,
      correctAnswers: Math.floor(totalScore * 4), // Approximation for UI
      timeSpent: exam.duration - timeLeft,
      date: new Date().toISOString(),
      answers
    };
    
    onFinish(result);
  };
  
  const handleCancelClick = () => {
    Swal.fire({
      title: 'Hủy bài kiểm tra?',
      text: "Kết quả của bạn sẽ không được lưu. Bạn có chắc chắn muốn thoát?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý thoát',
      cancelButtonText: 'Tiếp tục làm bài',
      confirmButtonColor: '#e11d48',
    }).then((result) => {
      if (result.isConfirmed) {
        onCancel();
      }
    });
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6 animate-fade-in relative pb-24">
      {/* Sticky Header */}
      <div className="sticky top-4 z-40 flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 backdrop-blur-md bg-opacity-90">
        <button onClick={handleCancelClick} className="flex items-center gap-2 text-slate-500 hover:text-rose-600 font-medium">
          <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Thoát</span>
        </button>
        <h3 className="font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-md text-center">{exam.title}</h3>
        <div className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold border shadow-sm",
          timeLeft <= 300 
            ? "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-900/30 dark:border-rose-800" 
            : "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800"
        )}>
          <Clock className="w-4 h-4" />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="space-y-12">
        {/* PART 1: MULTIPLE CHOICE */}
        {mcQs.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-indigo-900 dark:text-indigo-400 uppercase tracking-widest border-b-2 border-indigo-100 dark:border-indigo-900/50 pb-2">
              Phần I. Câu trắc nghiệm nhiều phương án lựa chọn ({mcQs.length} câu)
            </h2>
            {mcQs.map((q, i) => (
              <div key={q.id} id={`q-${q.id}`} className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8 scroll-mt-24">
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <p className="font-bold text-lg text-slate-900 dark:text-white leading-relaxed pt-0.5">{q.content}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12">
                  {q.options?.map((opt, j) => {
                    const isSelected = answers[q.id] === opt;
                    return (
                      <button
                        key={j}
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                        className={cn(
                          "p-4 rounded-xl border-2 text-left text-[15px] font-medium transition-all shadow-sm",
                          isSelected
                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-200 dark:ring-indigo-800"
                            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        )}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PART 2: TRUE / FALSE CLUSTER */}
        {tfQs.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-emerald-900 dark:text-emerald-400 uppercase tracking-widest border-b-2 border-emerald-100 dark:border-emerald-900/50 pb-2">
              Phần II. Câu trắc nghiệm đúng sai ({tfQs.length} câu)
            </h2>
            {tfQs.map((q, i) => {
              const uAns = JSON.parse(answers[q.id] || '{}');
              return (
                <div key={q.id} id={`q-${q.id}`} className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8 scroll-mt-24">
                  <div className="flex gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <p className="font-bold text-lg text-slate-900 dark:text-white leading-relaxed pt-0.5">{q.content}</p>
                  </div>
                  
                  <div className="space-y-3 pl-12">
                    {q.trueFalseStatements?.map((stmt, j) => {
                      const ans = uAns[stmt.id];
                      return (
                        <div key={stmt.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                          <p className="font-medium text-[15px] text-slate-800 dark:text-slate-200 flex-1">
                            <span className="font-bold text-slate-500 mr-2">{stmt.id.toUpperCase()}.</span>
                            {stmt.content}
                          </p>
                          <div className="flex gap-2 shrink-0">
                            <button
                              onClick={() => setAnswers(prev => ({ ...prev, [q.id]: JSON.stringify({ ...uAns, [stmt.id]: true }) }))}
                              className={cn("px-6 py-2 rounded-lg font-bold transition-all border", ans === true ? "bg-emerald-500 text-white border-emerald-600" : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-300 hover:bg-slate-100")}
                            >
                              ĐÚNG
                            </button>
                            <button
                              onClick={() => setAnswers(prev => ({ ...prev, [q.id]: JSON.stringify({ ...uAns, [stmt.id]: false }) }))}
                              className={cn("px-6 py-2 rounded-lg font-bold transition-all border", ans === false ? "bg-rose-500 text-white border-rose-600" : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-300 hover:bg-slate-100")}
                            >
                              SAI
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PART 3: ESSAY */}
        {esQs.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-amber-900 dark:text-amber-400 uppercase tracking-widest border-b-2 border-amber-100 dark:border-amber-900/50 pb-2">
              Phần III. Câu trắc nghiệm trả lời ngắn / Tự luận ({esQs.length} câu)
            </h2>
            {esQs.map((q, i) => (
              <div key={q.id} id={`q-${q.id}`} className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8 scroll-mt-24">
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <p className="font-bold text-lg text-slate-900 dark:text-white leading-relaxed pt-0.5">{q.content}</p>
                </div>
                
                <div className="pl-12">
                  <textarea
                    value={answers[q.id] || ''}
                    onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="Nhập câu trả lời của bạn vào đây..."
                    className="w-full p-4 h-32 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all resize-y"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-40 transform transition-transform">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-500">Đã trả lời</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">{answeredCount} / {questions.length} câu</p>
          </div>
          
          <div className="w-full sm:w-auto flex-1 sm:flex-none flex justify-center sm:justify-end gap-3 items-center">
            {answeredCount < questions.length && (
              <span className="text-sm font-medium text-amber-600 hidden sm:inline-block pr-4">Chưa chọn hết đáp án</span>
            )}
            <button
              onClick={() => {
                if (answeredCount < questions.length) {
                  Swal.fire({
                    title: 'Chưa làm xong',
                    text: `Bạn còn ${questions.length - answeredCount} câu chưa trả lời. Vẫn muốn nộp bài?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Nộp luôn',
                    cancelButtonText: 'Kiểm tra lại',
                  }).then((res) => { if (res.isConfirmed) submitExam(); });
                } else {
                  submitExam();
                }
              }}
              className="w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-indigo-500/30 transition-shadow"
            >
              Nộp bài
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// === EXAM RESULT VIEW ===
function ExamResultView({ result, exam, questions, onBack }: { 
  result: ExamResult; 
  exam: Exam; 
  questions: Question[]; 
  onBack: () => void; 
}) {
  const pct = result.score;
  const isPass = pct >= 8;

  const mcQs = questions.filter(q => q.type === 'multiple_choice' || !q.type);
  const tfQs = questions.filter(q => q.type === 'true_false_cluster');
  const esQs = questions.filter(q => q.type === 'essay');

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto animate-slide-up space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-4">
        <ArrowLeft className="w-5 h-5" /> Trở về danh sách
      </button>

      <div className="text-center space-y-4 bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
        {isPass && (
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-400" />
        )}
        <div className="text-6xl mb-2">{isPass ? '🏆' : pct >= 5 ? '📝' : '📖'}</div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{exam.title}</h2>
        
        <div className="flex items-center justify-center gap-2">
          <p className={cn("text-6xl font-black", isPass ? "text-emerald-600" : pct >= 5 ? "text-amber-500" : "text-rose-500")}>
            {pct}<span className="text-3xl">đ</span>
          </p>
        </div>
        
        <div className="flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mt-6">
          <p className="flex items-center gap-1"><Clock className="w-4 h-4 text-blue-500" /> {Math.floor(result.timeSpent / 60)} phút {result.timeSpent % 60}s</p>
          <p className="flex items-center gap-1"><Zap className="w-4 h-4 text-amber-500" /> +{Math.round(result.score * 10)} XP</p>
        </div>
      </div>

      <div className="space-y-12 pt-6">
        
        {/* RESULT: PART 1 */}
        {mcQs.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white px-2 mb-4">I. Trắc nghiệm nhiều lựa chọn</h3>
            {mcQs.map((q, i) => {
              const userAnswer = result.answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={q.id} className={cn("p-6 rounded-2xl border-2 shadow-sm bg-white dark:bg-slate-800", isCorrect ? "border-emerald-200 dark:border-emerald-800/50" : "border-rose-200 dark:border-rose-800/50")}>
                  <div className="flex gap-3 mb-4">
                    <div className="mt-0.5 shrink-0">
                      {isCorrect ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <XCircle className="w-6 h-6 text-rose-500" />}
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white text-[15px] leading-relaxed">
                      <span className="text-slate-400 mr-2">Câu {i + 1}.</span>{q.content}
                    </p>
                  </div>
                  
                  {/* Hiển thị tất cả các phương án */}
                  <div className="grid grid-cols-1 gap-2 ml-9 mb-4">
                    {q.options?.map((opt, j) => {
                      const isThisCorrect = opt === q.correctAnswer;
                      const isThisSelected = opt === userAnswer;
                      const labels = ['A', 'B', 'C', 'D'];
                      return (
                        <div key={j} className={cn(
                          "p-3 rounded-lg border text-sm font-medium flex items-start gap-2",
                          isThisCorrect
                            ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300"
                            : isThisSelected && !isThisCorrect
                              ? "bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-300 line-through"
                              : "bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                        )}>
                          <span className="font-bold shrink-0 w-6">{labels[j]}.</span>
                          <span className="flex-1">{opt}</span>
                          {isThisCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />}
                          {isThisSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />}
                        </div>
                      );
                    })}
                  </div>
                  
                  {q.explanation && (
                    <div className="ml-9 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">📖 Giải thích:</span> {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* RESULT: PART 2 */}
        {tfQs.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white px-2 mb-4">II. Trắc nghiệm đúng sai</h3>
            {tfQs.map((q, i) => {
              const uAns = JSON.parse(result.answers[q.id] || '{}');
              return (
                <div key={q.id} className="p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                  <p className="font-bold text-slate-900 dark:text-white mb-5 text-[15px] leading-relaxed">
                    <span className="text-slate-400 mr-2">Câu {i + 1}.</span>{q.content}
                  </p>
                  <div className="space-y-3">
                    {q.trueFalseStatements?.map(stmt => {
                      const ans = uAns[stmt.id];
                      const isCorrect = ans === stmt.isTrue;
                      return (
                        <div key={stmt.id} className={cn("p-4 rounded-xl border-2", isCorrect ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/50" : "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800/50")}>
                          <div className="flex items-start gap-2 mb-2">
                            {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />}
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                              <span className="uppercase text-slate-400 mr-1">{stmt.id}.</span> {stmt.content}
                            </p>
                          </div>
                          <div className="ml-7 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                            <span>
                              Bạn chọn: <strong className={isCorrect ? "text-emerald-600" : "text-rose-600"}>{ans === true ? 'ĐÚNG' : ans === false ? 'SAI' : '(Trống)'}</strong>
                            </span>
                            <span>
                              Đáp án: <strong className="text-emerald-600">{stmt.isTrue ? 'ĐÚNG' : 'SAI'}</strong>
                            </span>
                          </div>
                          {stmt.explanation && (
                            <div className="ml-7 mt-3 p-3 bg-white/70 dark:bg-slate-900/30 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                <span className="font-bold text-indigo-600 dark:text-indigo-400">📖 Giải thích:</span> {stmt.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* RESULT: PART 3 */}
        {esQs.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white px-2 mb-4">III. Tự luận / Trả lời ngắn</h3>
            {esQs.map((q, i) => {
              const uAns = result.answers[q.id] || '';
              return (
                <div key={q.id} className="p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                  <p className="font-bold text-slate-900 dark:text-white mb-5 text-[15px] leading-relaxed">
                    <span className="text-slate-400 mr-2">Câu {i + 1}.</span>{q.content}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2 flex items-center gap-1">✍️ Câu trả lời của bạn:</p>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 whitespace-pre-wrap text-sm leading-relaxed">
                      {uAns || <span className="text-slate-400 italic">Chưa làm</span>}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase mb-2">📖 Gợi ý đáp án và chấm điểm:</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">{q.explanation}</p>
                    {q.keywords && (
                      <div>
                        <p className="text-xs font-bold text-slate-500 mb-1.5">Từ khoá yêu cầu:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {q.keywords.map(k => {
                            const matched = uAns.toLowerCase().includes(k.toLowerCase());
                            return (
                              <span key={k} className={cn(
                                "inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono border",
                                matched
                                  ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400"
                                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                              )}>
                                {matched ? '✅' : '❌'} {k}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
